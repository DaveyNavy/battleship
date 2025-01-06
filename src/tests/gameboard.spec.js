import { Gameboard } from "../scripts/gameboard";
import { Ship } from "../scripts/ship";

test("Cannot place out of bounds", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  expect(game.canPlace(9, 9, ship)).toBe(false);
});

test("Cannot place out of bounds vertically", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  expect(game.canPlace(0, 9, ship, true)).toBe(false);
});

test("Place ship", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  game.placeShip(3, 4, ship);
  for (let i = 3; i < 6; i++) {
    expect(game.board[i][4]).toBe(ship);
  }
});

test("Place vertical ship", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  game.placeShip(3, 4, ship, true);
  for (let i = 4; i < 7; i++) {
    expect(game.board[3][i]).toBe(ship);
  }
});

test("Hit ship", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  game.placeShip(3, 4, ship);
  game.receiveAttack(4, 4);
  expect(ship.hits).toBe(1);
});

test("Miss ship", () => {
  const game = new Gameboard();
  const ship = new Ship(3);
  game.placeShip(3, 4, ship);
  game.receiveAttack(8, 4);
  expect(ship.hits).toBe(0);
  expect(game.misses[8][4]).toBe(1);
});

test("Sunk all", () => {
  const game = new Gameboard();
  const ship = new Ship(2);
  const ship2 = new Ship(1);
  game.placeShip(2, 1, ship);
  game.placeShip(4, 3, ship2);
  game.receiveAttack(2, 1);
  game.receiveAttack(3, 1);
  game.receiveAttack(4, 3);
  expect(game.sunkAll()).toBe(true);
});

test("Sunk all when some ships still afloat", () => {
  const game = new Gameboard();
  const ship = new Ship(2);
  const ship2 = new Ship(1);
  game.placeShip(2, 1, ship);
  game.placeShip(4, 3, ship2);
  game.receiveAttack(2, 1);
  expect(game.sunkAll()).toBe(false);
});
