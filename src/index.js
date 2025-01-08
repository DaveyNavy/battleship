import "./styles.css";

import { Player } from "./scripts/player";
import { Ship } from "./scripts/ship";
import { render } from "./scripts/render";

const player1 = new Player();
const computer = new Player();

const placeShip = new Event("place");
const playerTurn = new Event("player");
const computerTurn = new Event("computer");

const player = document.querySelector(".my-board");
const enemy = document.querySelector(".enemy-board");
const place = document.querySelector(".my-ships");

render(player1.gameBoard, computer.gameBoard);

// Place ships
const shipSizes = [5, 4, 3, 3, 2];
shipSizes.forEach((ship) => {
  computer.placeComputerShip(ship);
});

let draggables = [];
const myShips = document.querySelector(".my-ships");
shipSizes.forEach((size) => {
  const div = document.createElement("div");
  div.className = "ship";
  div.setAttribute("style", "width: 50px; height: " + size * 50 + "px");
  div.setAttribute("draggable", "true");
  draggables.push(div);
  myShips.appendChild(div);
});

const toggleDirection = document.createElement("button");
toggleDirection.textContent = "Toggle Direction";
document.querySelector(".ships").prepend(toggleDirection);

let currDirection = "V";
toggleDirection.addEventListener("click", () => {
  currDirection = currDirection == "V" ? "H" : "V";
  draggables.forEach((e) => {
    const height = e.offsetHeight;
    const width = e.offsetWidth;
    e.setAttribute("style", "width: " + height + "px; height: " + width + "px");
  });
  document.querySelector(".ships").prepend(toggleDirection);
});

place.addEventListener("place", () => {
  let currDragged;
  draggables.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      currDragged = e.target;
    });
  });

  Array.from(player.children).forEach((div) => {
    div.addEventListener("dragover", (e) => {
      e.preventDefault();
      div.setAttribute("style", "background-color: gray");
    });

    div.addEventListener("dragleave", () => {
      if (div.getAttribute("data-hasShip") == "true") {
        div.setAttribute("style", "background-color: black");
      } else {
        div.setAttribute("style", "background-color: white");
      }
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      const x = +div.getAttribute("data-x");
      const y = +div.getAttribute("data-y");
      const size =
        (currDirection == "V"
          ? currDragged.offsetHeight
          : currDragged.offsetWidth) / 50;
      if (player1.gameBoard.canPlace(x, y, size, currDirection == "V")) {
        player1.gameBoard.placeShip(x, y, size, currDirection == "V");
        draggables = draggables.filter((e) => e != currDragged);
        myShips.removeChild(currDragged);
        render(player1.gameBoard, computer.gameBoard);

        if (place.childElementCount == 0) {
          document.querySelector(".ships").removeChild(toggleDirection);
          player.dispatchEvent(playerTurn);
        } else {
          place.dispatchEvent(placeShip);
        }
      } else {
        if (div.getAttribute("data-hasShip") == "true") {
          div.setAttribute("style", "background-color: black");
        } else {
          div.setAttribute("style", "background-color: white");
        }
      }
    });
  });
});
place.dispatchEvent(placeShip);

// Game Phase
enemy.addEventListener("computer", () => {
  if (computer.gameBoard.sunkAll()) {
    render(player1.gameBoard, computer.gameBoard);
    document.querySelector("#result").textContent = "Game over! You Win!";
    return;
  }
  const move = computer.makeComputerMove();
  player1.gameBoard.receiveAttack(move[0], move[1]);
  render(player1.gameBoard, computer.gameBoard);
  player.dispatchEvent(playerTurn);
});

player.addEventListener("player", () => {
  if (player1.gameBoard.sunkAll()) {
    render(player1.gameBoard, computer.gameBoard);
    document.querySelector("#result").textContent = "Game over! You Lose!";
    return;
  }
  Array.from(enemy.children).forEach((element) => {
    element.addEventListener("click", () => {
      const x = +element.getAttribute("data-x");
      const y = +element.getAttribute("data-y");

      if (player1.isLegalMove(x, y)) {
        computer.gameBoard.receiveAttack(x, y);
        render(player1.gameBoard, computer.gameBoard);
        enemy.dispatchEvent(computerTurn);
      } else {
        alert("You cannot move there!");
      }
    });
  });
});
