import "./styles.css";

import { Player } from "./scripts/player";
import { Ship } from "./scripts/ship";
import { render } from "./scripts/render";

const player1 = new Player();
const computer = new Player();

player1.gameBoard.placeShip(0, 0, new Ship(3));
computer.gameBoard.placeShip(0, 0, new Ship(4));

let currTurn = "Player";

const playerTurn = new Event("player");
const computerTurn = new Event("computer");

const player = document.querySelector(".my-board");
const enemy = document.querySelector(".enemy-board");

render(player1.gameBoard, computer.gameBoard);

enemy.addEventListener("computer", () => {
  const move = computer.makeComputerMove();
  player1.gameBoard.receiveAttack(move[0], move[1]);
  render(player1.gameBoard, computer.gameBoard);
  player.dispatchEvent(playerTurn);
});

player.addEventListener("player", () => {
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

player.dispatchEvent(playerTurn);
