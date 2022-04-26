// ==UserScript==
// @name        IGG-Games Anti-Anti Adblock
// @namespace   Violentmonkey Scripts
// @match       *://igg-games.com/*
// @grant       none
// @version     1.0
// @author      earthplusthree
// @description Watches for and removes 'Disable Adblock' popup on igg-games.com
// ==/UserScript==

let antiAdblockModal = document.getElementById("idModal");
let originalParent = antiAdblockModal.parentNode.nodeName;

const observer = new MutationObserver((mutations, observer) => {
  if (antiAdblockModal.parentNode.nodeName !== originalParent)
    antiAdblockModal.parentNode.remove();
});
observer.observe(document, {
  subtree: true,
  attributes: true,
});
