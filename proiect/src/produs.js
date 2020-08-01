"use strict";

class View{
    constructor(){
        this.produsFragment = document.querySelector(ID_PRODUCT_TEMPLATE).content;
        this.produse = document.querySelector(ID_DATA)
        
    }
    update(items){
        this.produse.textContent = "";

        const fragment = document.createDocumentFragment();
        for ( let i of items){

            let item = this.produsFragment.cloneNode(true);

            item.querySelector(".name").textContent = i.name;
            item.querySelector(".price").textContent = i.price;
            item.querySelector(".image").src = i.image;

            fragment.appendChild(item);
        }
        this.produse.appendChild(fragment);
    }
}


document.addEventListener("DOMContentLoaded", () =>     {
        new View();
        console.log("!")
})
