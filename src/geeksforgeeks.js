// ==UserScript==
// @name         geeksforgeeks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       cloped
// @match        https://www.geeksforgeeks.org/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    var $ = window.jQuery;
    $(window).bind("load", function() {
        $('_bsa_fancybar').remove();
        $('.cc-message').parent().remove()
    });
})();
