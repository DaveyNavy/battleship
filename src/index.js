import "./styles.css";

import { Player } from "./scripts/player";
import { Ship } from "./scripts/ship";
import { render } from "./scripts/render";

const player1 = new Player();
const computer = new Player();

player1.gameBoard.placeShip(0, 0, new Ship(3));
computer.gameBoard.placeShip(0, 0, new Ship(4));
render(player1.gameBoard.board, computer.gameBoard.board);
