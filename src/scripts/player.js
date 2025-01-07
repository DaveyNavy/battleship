import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player {
  isComputer;
  gameBoard;
  hitList;

  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameBoard = new Gameboard();
    this.hitList = new Map();
    for (let i = 0; i < 10; i++) {
      this.hitList.set(i, []);
    }
  }

  isLegalMove(x, y) {
    if (this.hitList.get(x).includes(y)) {
      return false;
    }
    this.hitList.get(x).push(y);
    return true;
  }

  makeComputerMove() {
    let x = Math.round(Math.random() * 9);
    let y = Math.round(Math.random() * 9);
    while (!this.isLegalMove(x, y)) {
      x = Math.round(Math.random() * 9);
      y = Math.round(Math.random() * 9);
    }
    return [x, y];
  }

  placeComputerShip(size) {
    const ship = new Ship(size);
    let x = Math.round(Math.random() * 9);
    let y = Math.round(Math.random() * 9);
    let vertical = !!Math.round(Math.random());
    while (!this.gameBoard.canPlace(x, y, ship, vertical)) {
      x = Math.round(Math.random() * 9);
      y = Math.round(Math.random() * 9);
      vertical = !!Math.round(Math.random());
    }
    this.gameBoard.placeShip(x, y, ship, vertical);
  }
}
