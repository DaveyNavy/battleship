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

enemy.addEventListener("computer", () => {
  const move = computer.makeComputerMove();
  player1.gameBoard.receiveAttack(move[0], move[1]);
  render(player1.gameBoard, computer.gameBoard);
  player.dispatchEvent(playerTurn);
});

player.addEventListener("player", () => {
  render(player1.gameBoard, computer.gameBoard);
  Array.from(enemy.children).forEach((element) => {
    element.addEventListener("click", () => {
      if (currTurn == "Player") {
        computer.gameBoard.receiveAttack(
          element.getAttribute("data-x"),
          element.getAttribute("data-y")
        );
        render(player1.gameBoard, computer.gameBoard);
      }
      enemy.dispatchEvent(computerTurn);
    });
  });
});

player.dispatchEvent(playerTurn);
