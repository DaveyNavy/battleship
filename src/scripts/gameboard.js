export class Gameboard {
  board;
  misses;
  hits;
  shipList;

  constructor() {
    this.board = [];
    this.misses = [];
    this.hits = [];
    this.shipList = [];
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      this.misses.push([]);
      this.hits.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push(0);
        this.misses[i].push(0);
        this.hits[i].push(0);
      }
    }
  }

  canPlace(x, y, ship, vertical = false) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;
    if (!vertical) {
      if (y + ship.length >= 10) return false;

      for (let i = y; i < y + ship.length; i++) {
        if (this.board[x][i] != 0) {
          return false;
        }
      }
    } else {
      if (x + ship.length >= 10) return false;

      for (let j = x; j < x + ship.length; j++) {
        if (this.board[j][y] != 0) return false;
      }
    }
    return true;
  }

  placeShip(x, y, ship, vertical = false) {
    if (!this.canPlace(x, y, ship, vertical)) {
      return;
    }
    if (!vertical) {
      for (let i = y; i < y + ship.length; i++) {
        this.board[x][i] = ship;
      }
    } else {
      for (let j = x; j < x + ship.length; j++) {
        this.board[j][y] = ship;
      }
    }
    this.shipList.push(ship);
  }

  receiveAttack(x, y) {
    if (this.board[x][y] == 0) {
      this.misses[x][y] = 1;
    } else {
      this.board[x][y].hit();
      this.hits[x][y] = 1;
    }
  }

  sunkAll() {
    for (const ship of this.shipList) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}
