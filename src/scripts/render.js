import { clear } from "./clear";
import { Ship } from "./ship";

export function render(myBoard, enemyBoard) {
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  clear();
  const me = document.querySelector(".my-board");
  const enemy = document.querySelector(".enemy-board");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.setAttribute("data-x", i);
      div.setAttribute("data-y", j);
      if (myBoard.misses[i][j] != 0) {
        div.setAttribute("style", "background-color: blue");
      } else if (myBoard.hits[i][j] != 0) {
        div.setAttribute("style", "background-color: red");
      } else if (myBoard.board[i][j] != 0) {
        div.setAttribute("style", "background-color: black");
        div.setAttribute("data-hasShip", "true");
      }

      me.appendChild(div);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement("button");
      button.setAttribute("data-x", i);
      button.setAttribute("data-y", j);
      if (enemyBoard.misses[i][j] != 0) {
        button.setAttribute("style", "background-color: blue");
      } else if (enemyBoard.hits[i][j] != 0) {
        button.setAttribute("style", "background-color: red");
      } else {
      }
      enemy.appendChild(button);
    }
  }
}
