import "bootstrap";
import "./style.css";

let who = ['A two-headed octopus', 'My magical dog', 'An angry elephant', 'The angry ghost'];
let action = ['yelled at', 'stole', 'threw', 'hid'];
let what = ['my pizza', 'my shoes', 'my homework', 'my bottle of water'];
let where = ['at the gym', 'at the park', 'at the cinema', 'in the backyard'];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhere = where[Math.floor(Math.random() * where.length)];
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhere}.`;
}

window.onload = function () {
  document.getElementById("intro").innerHTML = "OMG! You will not believe me but...";
  document.getElementById("excuse").innerHTML = generateExcuse();
};
