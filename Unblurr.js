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
