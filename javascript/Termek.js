export default class Termek {
  static #id_glob = 0;
  id;
  price;
  name;
  description;
  img;
  constructor(price, name, description, img) {
    this.price = price;
    this.name = name;
    this.description = description;
    this.img = img;
    this.id = Termek.#id_glob++;
  }
}
