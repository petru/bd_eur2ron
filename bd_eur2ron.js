// ==UserScript==
// @name bd_eur2ron
// @namespace Violentmonkey Scripts
// @match https://www.bookdepository.com/*
// @grant none
// ==/UserScript==

console.log("Price replacement loaded.");
var euroToRon = 4.77;
var searchRE = /(\d{1,4}),(\d{1,2}) €/g;
var elements = document.getElementsByTagName("*");

function convert(str, x, y) {
  var price = parseFloat(x + "." + y);
  // console.log("Price is: " + price);
  return (price*euroToRon).toPrecision(3) + ' RON';
}
for (var i = 0, l = elements.length; i < l; i++) {
  var element = elements[i];
  element.innerHTML = element.innerHTML.replace(searchRE, convert)
}
