import { Kartya } from "./Kartya.js";

export class Kartyak {
  static #childName = "elem";
  #kartyak = [];
  parentElem;

  constructor(parentElem, termekek = []) {
    this.parentElem = parentElem;
    for (let i = 0; i < termekek.length; i++) {
      this.parentElem.insertAdjacentHTML("beforeend", `<div class="${Kartyak.#childName}"></div>`);
      let child = this.parentElem.lastElementChild;
      this.#kartyak.push(new Kartya(child, termekek[i]));
    }
    this.display();
  }

  display(isAdmin = false) {
    for (let i = 0; i < this.#kartyak.length; i++) {
      this.#kartyak[i].display(isAdmin);
    }
  }
}
