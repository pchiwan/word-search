(this["webpackJsonpword-search"]=this["webpackJsonpword-search"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"source_language":"en","word":"man","character_grid":[["i","q","\xed","l","n","n","m","\xf3"],["f","t","v","\xf1","b","m","h","a"],["h","j","\xe9","t","e","t","o","z"],["x","\xe1","o","i","e","\xf1","m","\xe9"],["q","\xe9","i","\xf3","q","s","b","s"],["c","u","m","y","v","l","r","x"],["\xfc","\xed","\xf3","m","o","t","e","k"],["a","g","r","n","n","\xf3","s","m"]],"word_locations":{"6,1,6,2,6,3,6,4,6,5,6,6":"hombre"},"target_language":"es"},{"source_language":"en","word":"woman","character_grid":[["v","\xe1","q","t","b","f","q"],["y","x","i","a","\xfc","v","a"],["r","d","y","\xed","t","n","a"],["f","v","\xf3","w","l","a","v"],["b","u","\xfa","j","q","h","\xe1"],["c","o","m","u","j","e","r"],["h","o","d","\xfa","w","d","\xfc"]],"word_locations":{"2,5,3,5,4,5,5,5,6,5":"mujer"},"target_language":"es"},{"source_language":"en","word":"boy","character_grid":[["x","c","e","x","c","i","o"],["e","z","q","r","h","w","y"],["\xf1","\xe9","\xf1","w","i","n","\xe1"],["o","l","a","\xe1","c","i","n"],["r","v","\xf1","s","o","\xf1","w"],["k","m","w","a","\xfc","o","w"],["\xf3","r","\xfa","b","l","g","\xfa"]],"word_locations":{"5,2,5,3,5,4,5,5":"ni\xf1o","4,0,4,1,4,2,4,3,4,4":"chico"},"target_language":"es"},{"source_language":"en","word":"girl","character_grid":[["o","s","\xf3","x","h","\xf1","h"],["\xfc","r","g","o","l","\xfa","b"],["a","t","c","h","i","c","a"],["u","\xfa","r","w","\xe1","t","\xe9"],["p","n","v","r","q","m","l"],["f","d","t","e","a","\xf3","l"],["u","t","n","i","\xf1","a","s"]],"word_locations":{"2,2,3,2,4,2,5,2,6,2":"chica","2,6,3,6,4,6,5,6":"ni\xf1a"},"target_language":"es"},{"source_language":"en","word":"am","character_grid":[["d","c","e","h","p"],["f","e","\xfc","p","t"],["s","s","\xf3","\xed","l"],["o","s","\xed","\xf1","a"],["y","g","i","o","n"]],"word_locations":{"0,2,0,3,0,4":"soy"},"target_language":"es"},{"source_language":"en","word":"she","character_grid":[["z","n","w","f","m","\xe9"],["d","\xf3","q","w","n","e"],["z","\xe1","v","e","\xf3","l"],["r","c","z","z","m","l"],["\xfc","m","\xe1","\xfc","n","a"],["e","a","e","x","\xf1","h"]],"word_locations":{"5,1,5,2,5,3,5,4":"ella"},"target_language":"es"},{"source_language":"en","word":"apple","character_grid":[["\xfa","k","\xfc","b","\xed","n","z","d","o"],["u","\xe1","n","g","e","y","z","o","\xf1"],["o","\xe9","\xfa","\xe1","v","e","x","u","m"],["c","w","d","z","t","k","m","l","a"],["u","b","o","w","\xed","a","u","q","n"],["g","s","m","e","c","n","k","\xfa","z"],["a","o","v","t","p","\xfa","\xe9","k","a"],["f","j","i","j","n","i","b","\xf3","n"],["s","q","l","j","j","f","q","g","a"]],"word_locations":{"8,2,8,3,8,4,8,5,8,6,8,7,8,8":"manzana"},"target_language":"es"},{"source_language":"en","word":"eat","character_grid":[["i","a","c","j","r","w"],["k","b","n","o","u","v"],["v","x","z","f","m","a"],["u","l","o","p","e","o"],["l","\xfa","\xe9","q","j","e"],["a","h","\xfa","l","k","w"]],"word_locations":{"2,0,3,1,4,2,5,3":"como"},"target_language":"es"},{"source_language":"en","word":"bread","character_grid":[["\xfc","\xe1","p","a","n"],["k","a","k","m","l"],["a","x","q","e","h"],["p","s","a","j","\xed"],["\xe1","q","l","j","l"]],"word_locations":{"2,0,3,0,4,0":"pan"},"target_language":"es"}]')},24:function(e,n,t){"use strict";t.r(n);var r,o,a,c,i,s,u,d=t(0),l=t.n(d),g=t(12),h=t.n(g),f=t(4),m=t(2),j=t(3),b=t(10),x=function(e){var n=e.split(",");return{x:parseInt(n[0],10),y:parseInt(n[1],10)}},p=function(e,n){return[Math.min(e,n),Math.max(e,n)]},v=function(e,n){var t=x(e),r=x(n),o=t.y-r.y,a=t.x-r.x,c=[];return function(e,n){return!n&&e}(a,o)&&(c=function(e,n){for(var t=[],r=p(e.x,n.x),o=Object(f.a)(r,2),a=o[0],c=o[1],i=a;i<=c;i++)t.push("".concat(i,",").concat(e.y));return t}(t,r)),function(e,n){return!e&&n}(a,o)&&(c=function(e,n){for(var t=[],r=p(e.y,n.y),o=Object(f.a)(r,2),a=o[0],c=o[1],i=a;i<=c;i++)t.push("".concat(e.x,",").concat(i));return t}(t,r)),function(e,n){return Math.abs(n)===Math.abs(e)}(a,o)&&(c=function(e,n){for(var t=[],r=Math.abs(e.x-n.x),o=e.x<n.x,a=e.y<n.y,c=0;c<=r;c++){var i=o?e.x+c:e.x-c,s=a?e.y+c:e.y-c;t.push("".concat(i,",").concat(s))}return t}(t,r)),c.length&&e!==c[0]?c.reverse():c},w=t(1),O=j.a.div(r||(r=Object(m.a)(["\n  text-align: center;\n  padding: 8px;\n  font-size: 24px;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  border-right: 1px solid black;\n  user-select: none;\n  cursor: pointer;\n  background-color: ",";\n\n  @media (min-width: 768px) {\n    ","\n  }\n\n  @media (max-width: 480px) {\n    padding: 4px 8px;\n    font-size: 18px;\n  }\n"])),(function(e){return e.highlighted||e.selected?"#ffef00":"white"}),(function(e){return!e.selected&&!e.highlighted&&"\n      &:hover {\n        background-color: ".concat("lemonchiffon",";\n      }\n    ")})),_=function(e){return e.dataset.coord||""},y=function(e){var n=e.children,t=e.coord,r=e.highlighted,o=void 0!==r&&r,a=e.selected,c=void 0!==a&&a,i=e.onMouseDown,s=void 0===i?function(){}:i,u=e.onMouseMove,d=void 0===u?function(){}:u,l=e.onMouseUp,g=void 0===l?function(){}:l,h=function(e){s(_(e.target))},f=function(){g()};return Object(w.jsx)(O,{"data-coord":t,highlighted:o,selected:c,onMouseDown:h,onMouseMove:function(e){d(_(e.target))},onMouseUp:f,onTouchStart:h,onTouchMove:function(e){var n=e.changedTouches[0],t=document.elementFromPoint(n.clientX,n.clientY);d(_(t))},onTouchEnd:f,children:n})},k=l.a.memo(y),z=j.a.div(o||(o=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 50px);\n  border-top: 1px solid black;\n  border-left: 1px solid black;\n\n  @media (max-width: 480px) {\n    grid-template-columns: repeat(",", 32px);\n  }\n"])),(function(e){return e.columns||1}),(function(e){return e.columns||1})),M=function(e){var n=e.grid,t=e.highlightedCells,r=e.onWordSelected,o=void 0===r?function(){}:r,a=Object(d.useState)(!1),c=Object(f.a)(a,2),i=c[0],s=c[1],u=Object(d.useState)(""),l=Object(f.a)(u,2),g=l[0],h=l[1],m=Object(d.useState)(new Set),j=Object(f.a)(m,2),b=j[0],x=j[1],p=Object(d.useRef)("");Object(d.useEffect)((function(){var e=function(){s(!1)};document.addEventListener("mouseup",e),document.addEventListener("touchend",e);var n=function(e){e.preventDefault()};return document.addEventListener("touchmove",n,{passive:!1}),function(){document.removeEventListener("mouseup",e),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",n)}}),[]),Object(d.useEffect)((function(){x(new Set)}),[n]);var O=Object(d.useCallback)((function(e){s(!0),h(e)}),[]),_=function(e){if(i&&g!==e&&e!==p.current){var n=v(g,e);x(new Set(n)),p.current=e}},y=function(){s(!1),o(Array.from(b)),x(new Set)};return Object(w.jsx)(z,{columns:n.length,"data-testid":"grid",children:n.map((function(e,n){return e.map((function(e,r){var o="".concat(r,",").concat(n);return Object(w.jsx)(k,{coord:o,highlighted:t.has(o),selected:b.has(o),onMouseDown:O,onMouseMove:_,onMouseUp:y,children:e},o)}))}))})},S=j.a.p(a||(a=Object(m.a)(["\n  font-size: 20px;\n  margin: 5px 0;\n  text-align: center;\n\n  @media (max-width: 480px) {\n    font-size: 18px;\n  }\n"]))),q=j.a.div(c||(c=Object(m.a)(["\n  margin-bottom: 20px;\n"]))),E=function(e){var n=e.game,t=e.onGameFinished,r=void 0===t?function(){}:t,o=Object(d.useState)(new Set),a=Object(f.a)(o,2),c=a[0],i=a[1],s=Object(d.useRef)([]),u=Object(d.useRef)(0),l=Object(d.useCallback)((function(){i(new Set),s.current=Object.keys(n.word_locations),u.current=0}),[n]);Object(d.useEffect)((function(){n&&l()}),[n,l]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(q,{children:[Object(w.jsxs)(S,{children:["Search word: ",Object(w.jsx)("strong",{children:n.word})]}),Object(w.jsxs)(S,{children:["Source language: ",Object(w.jsx)("strong",{children:n.source_language})]}),Object(w.jsxs)(S,{children:["Target language: ",Object(w.jsx)("strong",{children:n.target_language})]}),Object(w.jsxs)(S,{children:["Words to find:"," ",Object(w.jsxs)("strong",{children:[u.current,"/",s.current.length]})]})]}),Object(w.jsx)(M,{grid:n.character_grid,highlightedCells:c,onWordSelected:function(e){s.current.includes(e.join(","))&&(u.current+=1,u.current===s.current.length?r():i(new Set([].concat(Object(b.a)(Array.from(c)),Object(b.a)(e)))))}})]})},L=j.a.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n"]))),T=j.a.h1(s||(s=Object(m.a)(['\n  font-family: "Unica One", cursive;\n  font-size: 40px;\n\n  span {\n    font-size: 34px;\n  }\n\n  @media (max-width: 480px) {\n    font-size: 30px;\n\n    span {\n      font-size: 24px;\n    }\n  }\n']))),C=j.a.h2(u||(u=Object(m.a)(["\n  @media (max-width: 480px) {\n    font-size: 20px;\n  }\n"])));var D=function(e){var n=e.games,t=void 0===n?[]:n,r=Object(d.useState)(0),o=Object(f.a)(r,2),a=o[0],c=o[1],i=t[a];return Object(w.jsxs)(L,{children:[Object(w.jsxs)(T,{children:["Word Search"," ",Object(w.jsx)("span",{"aria-label":"Magnifying glass",role:"img",children:"\ud83d\udd0d"})]}),i?Object(w.jsx)(E,{game:i,onGameFinished:function(){c(a+1)}}):Object(w.jsx)(C,{children:"There are no more games!"})]})},F=t(23);h.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(D,{games:F})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7f5c548d.chunk.js.map