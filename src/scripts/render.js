import { clear } from "./clear";
export function render(myBoard, enemyBoard) {
  clear();
  const me = document.querySelector(".my-board");
  const enemy = document.querySelector(".enemy-board");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      if (myBoard.misses[j][i] != 0) {
        div.setAttribute("style", "background-color: blue");
      } else if (myBoard.hits[j][i] != 0) {
        div.setAttribute("style", "background-color: red");
      } else {
      }
      me.appendChild(div);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement("button");
      button.setAttribute("data-x", j);
      button.setAttribute("data-y", i);
      if (enemyBoard.misses[j][i] != 0) {
        button.setAttribute("style", "background-color: blue");
      } else if (enemyBoard.hits[j][i] != 0) {
        button.setAttribute("style", "background-color: red");
      } else {
      }
      enemy.appendChild(button);
    }
  }
}
