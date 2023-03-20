"use strict";

console.log("app.js is running 🎉");

// title - h1
const title = document.createElement("h1");
title.textContent = "DOM FUN PROJECT";
document.querySelector("header").appendChild(title);

// paragraph - p
const paragraph = document.createElement("p");
paragraph.textContent = "Hej Peter!";
document.querySelector("nav").appendChild(paragraph);
