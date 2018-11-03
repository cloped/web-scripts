// ==UserScript==
// @name         cssreferencio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       cloped
// @match        https://cssreference.io/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    var $ = window.jQuery;
    $(window).bind("load", function() {
        $('body').children('footer').remove();
        $('body').children('header').remove();
        $('body').children('a').remove();
        $('main').children('.ola').remove();
        $('main').children('section').children('a').remove();
        $('aside').children('footer').remove();
    });
})();
