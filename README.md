# Unblurr
Unblurs images on X without having to manually select "Show". Use with Tampermonkey.


If you wish to shorten the time of the script rerunning, change the bottom number from the default 2000 milliseconds.

All that needs to be done is to be on Twitter and enable the script, it should automatically start revealing all of the images from there.



The script is as follows:

// ==UserScript==
// @name         Auto Click "Show" Buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://twitter.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

function clickShowButtons() {
  setInterval(() => {
    document.querySelectorAll('div[role="button"]').forEach((element) => {
      if (element.textContent.includes('Show')) {
        element.click();
      }
    });
  }, 2000);
}

clickShowButtons();

})();
