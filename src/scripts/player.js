import { Gameboard } from "./gameboard";

export class Player {
  isComputer;
  gameBoard;

  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameBoard = new Gameboard();
  }
}
