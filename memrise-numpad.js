// ==UserScript==
// @name         Memrise Numpad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows using numpad with memrise.
// @author       Sam Weston
// @match        https://www.memrise.com/course/*/garden/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function ($, undefined) {
    $(function () {
        'use strict';

        var KEYCODE_NUMPAD_ONE = 97;
        var KEYCODE_NUMPAD_NINE = 105;

        // Memrise doesn't seem to support numpad keys all the time.
        // Fire a click on the appropriate choice when a numpad key is pressed.
        $(document).keydown(function (event) {
            if ((event.which >= KEYCODE_NUMPAD_ONE) && (event.which <= KEYCODE_NUMPAD_NINE)) {
                var $choices = $('.choices .choice');
                var index = event.which - KEYCODE_NUMPAD_ONE;

                if (index < $choices.length) {
                    $($choices[index]).click();

                    return false;
                }
            }
        });
    });
})(window.jQuery.noConflict(true));
