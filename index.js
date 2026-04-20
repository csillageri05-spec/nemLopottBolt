import { Kartyak } from "./javascript/Kartyak.js";
import { termekek } from "./javascript/termekek.js";



const galeriaElem = document.querySelector("#kartyak");
let galeria = new Kartyak(galeriaElem, termekek);
console.log("lefutott");
