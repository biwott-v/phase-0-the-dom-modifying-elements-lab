// Write your code here!
let body = document.body;
let main = document.querySelector("main");
main.remove();
let newHeader = document.createElement("h1");
body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.textContent = "VICTOR is the champion";
