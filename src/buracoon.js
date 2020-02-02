// ==UserScript==
// @name         buraco
// @namespace    https://buracoon.com.br/game/
// @version      0.1
// @author       cloped
// @match        https://buracoon.com.br/game/
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    setTimeout(function() {
        const ad = document.getElementById('banner');
        ad.parentNode.removeChild(ad);
        const main = document.getElementById('area');
        main.style.width = '100%';
    }, 1000);
})();
