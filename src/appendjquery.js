// ==UserScript==
// @name         appendJquery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       cloped
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    if(!window.jQuery){
        console.log('No jQuery --- Appending;');
        var jQueryScript = document.createElement('script');
        jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
        document.head.appendChild(jQueryScript);
        var $ = window.jQuery;
    }
})();
