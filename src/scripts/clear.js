export function clear() {
  const me = document.querySelector(".my-board");
  const enemy = document.querySelector(".enemy-board");
  while (me.firstChild) {
    me.removeChild(me.lastChild);
  }
  while (enemy.firstChild) {
    enemy.removeChild(enemy.lastChild);
  }
}
