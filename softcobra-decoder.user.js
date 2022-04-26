// ==UserScript==
// @name         Softcobra Decoder
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  decodes links on softcobra.net
// @author       earthplusthree
// @match        https://www.softcobra.com/*
// @grant        none
// @run-at       document-end
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// ==/UserScript==

var tableRows = document.getElementsByTagName("td");
for (var j = 0; j < tableRows.length; j++) {
  var currRow = tableRows[j].innerText;
  const regex = /^U2Fsd.*/g;
  if (currRow.match(regex)) {
    var decodedLink = CryptoJS.AES.decrypt(currRow, "/").toString(
      CryptoJS.enc.Utf8
    );
    tableRows[j].innerHTML = `<a href="${decodedLink}">${decodedLink}</a>`;
  }
}
