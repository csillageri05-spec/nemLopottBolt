export class Kartya{
    #termek;

    constructor(parentElem,termek = {id,price,name,description,image}){
        this.parentElem = parentElem;
        this.#termek = termek;
    }

    display(isAdmin = false){
        if (isAdmin) {
            this.admin_disp();
        }else{
            this.user_disp();
        }
    }

    user_disp(){
        this.parentElem.innerHTML = `
        <h4>${this.#termek.name}</h4>
        <img src="${this.#termek.image}" alt="Sötétedik oda kint!">
        <p>${this.#termek.description}</p>
        <button class="view">Megtekint</button>
        <button class="buy">Kosárba</button>
        `;
    }

    admin_disp(){
        this.parentElem.innerHTML = `
        <h4>${this.#termek.name}</h4>
        <img src="${this.#termek.image}" alt="Sötétedik oda kint!">
        <p>${this.#termek.description}</p>
        <button class="modify">Módosít</button>
        <button class="delete">Töröl</button>
        `;
    }
}