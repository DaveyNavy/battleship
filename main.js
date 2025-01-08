(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(354),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"* {\n    user-select: none;\n}\nh1 {\n    text-align: center;\n}\n\n.content {\n    padding: 5rem 10rem;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n}\n\n.container > div {\n    border: 1px solid black;\n}\n\n.player {\n    display: flex;\n    gap: 30px;\n}\n\n.ships {\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.my-ships {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 20px;\n    border: none;\n    height: 400px;\n    padding-top: 30px;\n}\n\n.ship {\n    background-color: black;\n    border: none;\n}\n\n.toggle-button {\n    position: absolute;\n    bottom: 700px;\n    left: 700px;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,SAAS;IACT,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf",sourcesContent:["* {\n    user-select: none;\n}\nh1 {\n    text-align: center;\n}\n\n.content {\n    padding: 5rem 10rem;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n}\n\n.container > div {\n    border: 1px solid black;\n}\n\n.player {\n    display: flex;\n    gap: 30px;\n}\n\n.ships {\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.my-ships {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 20px;\n    border: none;\n    height: 400px;\n    padding-top: 30px;\n}\n\n.ship {\n    background-color: black;\n    border: none;\n}\n\n.toggle-button {\n    position: absolute;\n    bottom: 700px;\n    left: 700px;\n}"],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var A=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:A,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),c=n.n(s),d=n(56),u=n.n(d),l=n(540),p=n.n(l),h=n(113),A=n.n(h),m=n(365),f={};f.styleTagTransform=A(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),o()(m.A,f),m.A&&m.A.locals&&m.A.locals;class b{length;hits;sunk;constructor(e){this.length=e,this.hits=0,this.sunk=!1}hit(){this.hits++,this.hits==this.length&&(this.sunk=!0)}isSunk(){return this.sunk}}class g{board;misses;hits;shipList;constructor(){this.board=[],this.misses=[],this.hits=[],this.shipList=[];for(let e=0;e<10;e++){this.board.push([]),this.misses.push([]),this.hits.push([]);for(let t=0;t<10;t++)this.board[e].push(0),this.misses[e].push(0),this.hits[e].push(0)}}canPlace(e,t,n,r=!1){if(e<0||e>=10||t<0||t>=10)return!1;if(r){if(e+n-1>=10)return!1;for(let r=e;r<e+n;r++)if(0!=this.board[r][t])return!1}else{if(t+n-1>=10)return!1;for(let r=t;r<t+n;r++)if(0!=this.board[e][r])return!1}return!0}placeShip(e,t,n,r=!1){if(!this.canPlace(e,t,n,r))return;const o=new b(n);if(r)for(let r=e;r<e+n;r++)this.board[r][t]=o;else for(let r=t;r<t+n;r++)this.board[e][r]=o;this.shipList.push(o)}receiveAttack(e,t){0==this.board[e][t]?this.misses[e][t]=1:(this.board[e][t].hit(),this.hits[e][t]=1)}sunkAll(){for(const e of this.shipList)if(!e.isSunk())return!1;return!0}}class v{isComputer;gameBoard;hitList;constructor(e=!1){this.isComputer=e,this.gameBoard=new g,this.hitList=new Map;for(let e=0;e<10;e++)this.hitList.set(e,[])}isLegalMove(e,t){return!this.hitList.get(e).includes(t)&&(this.hitList.get(e).push(t),!0)}makeComputerMove(){let e=Math.round(9*Math.random()),t=Math.round(9*Math.random());for(;!this.isLegalMove(e,t);)e=Math.round(9*Math.random()),t=Math.round(9*Math.random());return[e,t]}placeComputerShip(e){let t=Math.round(9*Math.random()),n=Math.round(9*Math.random()),r=!!Math.round(Math.random());for(;!this.gameBoard.canPlace(t,n,e,r);)t=Math.round(9*Math.random()),n=Math.round(9*Math.random()),r=!!Math.round(Math.random());this.gameBoard.placeShip(t,n,e,r)}}function y(e,t){!function(){const e=document.querySelector(".my-board"),t=document.querySelector(".enemy-board");for(;e.firstChild;)e.removeChild(e.lastChild);for(;t.firstChild;)t.removeChild(t.lastChild)}();const n=document.querySelector(".my-board"),r=document.querySelector(".enemy-board");for(let t=0;t<10;t++)for(let r=0;r<10;r++){const o=document.createElement("div");o.setAttribute("data-x",t),o.setAttribute("data-y",r),0!=e.misses[t][r]?o.setAttribute("style","background-color: blue"):0!=e.hits[t][r]?o.setAttribute("style","background-color: red"):0!=e.board[t][r]&&(o.setAttribute("style","background-color: black"),o.setAttribute("data-hasShip","true")),n.appendChild(o)}for(let e=0;e<10;e++)for(let n=0;n<10;n++){const o=document.createElement("button");o.setAttribute("data-x",e),o.setAttribute("data-y",n),0!=t.misses[e][n]?o.setAttribute("style","background-color: blue"):0!=t.hits[e][n]&&o.setAttribute("style","background-color: red"),r.appendChild(o)}}const C=new v,x=new v,B=new Event("place"),I=new Event("player"),k=new Event("computer"),E=document.querySelector(".my-board"),M=document.querySelector(".enemy-board"),S=document.querySelector(".my-ships");y(C.gameBoard,x.gameBoard);const w=[5,4,3,3,2];w.forEach((e=>{x.placeComputerShip(e)}));let L=[];const q=document.querySelector(".my-ships");w.forEach((e=>{const t=document.createElement("div");t.className="ship",t.setAttribute("style","width: 50px; height: "+50*e+"px"),t.setAttribute("draggable","true"),L.push(t),q.appendChild(t)}));const j=document.createElement("button");j.textContent="Toggle Direction",document.querySelector(".ships").prepend(j);let T="V";j.addEventListener("click",(()=>{T="V"==T?"H":"V",L.forEach((e=>{const t=e.offsetHeight,n=e.offsetWidth;e.setAttribute("style","width: "+t+"px; height: "+n+"px")})),document.querySelector(".ships").prepend(j)})),S.addEventListener("place",(()=>{let e;L.forEach((t=>{t.addEventListener("dragstart",(t=>{e=t.target}))})),Array.from(E.children).forEach((t=>{t.addEventListener("dragover",(e=>{e.preventDefault(),t.setAttribute("style","background-color: gray")})),t.addEventListener("dragleave",(()=>{"true"==t.getAttribute("data-hasShip")?t.setAttribute("style","background-color: black"):t.setAttribute("style","background-color: white")})),t.addEventListener("drop",(n=>{n.preventDefault();const r=+t.getAttribute("data-x"),o=+t.getAttribute("data-y"),a=("V"==T?e.offsetHeight:e.offsetWidth)/50;C.gameBoard.canPlace(r,o,a,"V"==T)?(C.gameBoard.placeShip(r,o,a,"V"==T),L=L.filter((t=>t!=e)),q.removeChild(e),y(C.gameBoard,x.gameBoard),0==S.childElementCount?(document.querySelector(".ships").removeChild(j),E.dispatchEvent(I)):S.dispatchEvent(B)):"true"==t.getAttribute("data-hasShip")?t.setAttribute("style","background-color: black"):t.setAttribute("style","background-color: white")}))}))})),S.dispatchEvent(B),M.addEventListener("computer",(()=>{if(x.gameBoard.sunkAll())return y(C.gameBoard,x.gameBoard),void(document.querySelector("#result").textContent="Game over! You Win!");const e=x.makeComputerMove();C.gameBoard.receiveAttack(e[0],e[1]),y(C.gameBoard,x.gameBoard),E.dispatchEvent(I)})),E.addEventListener("player",(()=>{if(C.gameBoard.sunkAll())return y(C.gameBoard,x.gameBoard),void(document.querySelector("#result").textContent="Game over! You Lose!");Array.from(M.children).forEach((e=>{e.addEventListener("click",(()=>{const t=+e.getAttribute("data-x"),n=+e.getAttribute("data-y");C.isLegalMove(t,n)?(x.gameBoard.receiveAttack(t,n),y(C.gameBoard,x.gameBoard),M.dispatchEvent(k)):alert("You cannot move there!")}))}))}))})();
//# sourceMappingURL=main.js.map