import { Ship } from "./ship";

test("Ship takes damage", () => {
  const ship = new Ship(5);
  ship.hit();
  const actual = ship.hits;
  const expected = 1;
  expect(actual).toBe(expected);
});

test("Ship sinks", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  const actual = ship.isSunk();
  const expected = true;
  expect(actual).toBe(expected);
});
