import { Ship } from "./ship";

test("Ship takes damage", () => {
  const ship = new Ship(5);
  ship.hit();
  const actual = ship.getHits();
  const expected = 4;
  expect(actual).toBe(expected);
});
