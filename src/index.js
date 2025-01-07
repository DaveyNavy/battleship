import "./styles.css";

import { Player } from "./scripts/player";
import { Ship } from "./scripts/ship";
import { render } from "./scripts/render";

const player1 = new Player();
const computer = new Player();

player1.gameBoard.placeShip(0, 0, new Ship(3));

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
myShips.appendChild(toggleDirection);

let currDirection = "V";
let currDragged;

toggleDirection.addEventListener("click", () => {
  currDirection = currDirection == "V" ? "H" : "V";
  draggables.forEach((e) => {
    const height = e.offsetHeight;
    const width = e.offsetWidth;
    e.setAttribute("style", "width: " + height + "px; height: " + width + "px");
  });
  myShips.appendChild(toggleDirection);
});

place.addEventListener("place", () => {
  draggables.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      currDragged = e.target;
    });
  });

  Array.from(player.children).forEach((div) => {
    div.addEventListener("dragover", (e) => {
      e.preventDefault();
      div.setAttribute("style", "background-color: gray");
      console.log(currDragged);
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
      console.log(currDragged);
      if (
        player1.gameBoard.canPlace(
          +div.getAttribute("data-x"),
          +div.getAttribute("data-y"),
          new Ship(
            Math.round(
              (currDirection == "V"
                ? currDragged.offsetHeight
                : currDragged.offsetWidth) / 50
            )
          ),
          currDirection == "V"
        )
      ) {
        player1.gameBoard.placeShip(
          +div.getAttribute("data-x"),
          +div.getAttribute("data-y"),
          new Ship(
            Math.round(
              (currDirection == "V"
                ? currDragged.offsetHeight
                : currDragged.offsetWidth) / 50
            )
          ),
          currDirection == "V"
        );
        draggables = draggables.filter((e) => {
          return e != currDragged;
        });
        console.log(draggables);
        currDragged.parentElement.removeChild(currDragged);
      }
      render(player1.gameBoard, computer.gameBoard);

      if (place.childElementCount == 1) {
        toggleDirection.setAttribute("style", "visibility: hidden");
        player.dispatchEvent(playerTurn);
      } else place.dispatchEvent(placeShip);
    });
  });
});
place.dispatchEvent(placeShip);

// // Game Phase
enemy.addEventListener("computer", () => {
  if (computer.gameBoard.sunkAll()) {
    render(player1.gameBoard, computer.gameBoard);
    alert("Game over! You win!");
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
    alert("Game over! You lose!");
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
