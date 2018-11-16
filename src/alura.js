// ==UserScript==
// @name         alura
// @namespace    https://cursos.alura.com.br/
// @version      0.1
// @author       cloped
// @match        https://cursos.alura.com.br/course/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    const $ = window.jQuery;
    $(window).bind('load', function() {
        setTimeout(function() {
            $('source').each((index, element) => {
                if ($(element).attr('type') == 'video/mp4' && $(element).attr('data-res') === 'hd') {
                    console.log('Download-hd');
                    const url = $(element).attr('src');
                    const aux = document.createElement('a');
                    document.body.appendChild(aux);
                    aux.href = url;
                    aux.download = 'true';
                    aux.click();
                }
            });
        }, 2000);
    });
})();
