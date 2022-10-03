let btnCreate = document.querySelector(".btn"); // butonul adauga
let bodyTable = document.querySelector(".table-body") // click pe body table
let obiectSelectat = ""; // stocare model pentru import in functia de stergere
let designerSelectat = ""; // o stocam ca sa o importam in functia de delete 
let deletion = document.querySelector(".deletion");//buton stergere
let edit = document.querySelector(".edit") // butonul edit

//input reset
let inputs = document.querySelectorAll(`.designer , .model , .size , .price`); // pentru reset inputs


// inputs edit 

let designerEdit = document.querySelector(".designerEdit")
let modelEdit = document.querySelector(".modelEdit")
let sizeEdit = document.querySelector(".sizeEdit")
let priceEdit = document.querySelector(".priceEdit")


btnCreate.addEventListener("click", () => {
// shoes.push(getShoe());

// populateTable(shoes);


let raspuns = getShoe();

// DACA elementul preluat in urma functiei get Shoe() contine o valoare/atribut designer,
// sa impinga elementul in vectorul nostru de shoes , adica daca are designer, atunci sigur e obiect
if (raspuns.designer != undefined) {
    shoes.push(raspuns);
    populateTable(shoes);
    resetInputs();
}  
// daca vine orice altceva din aceasta functie, decat obiecte cu atribute, atunci acela este arrayul 
//declarat de noi ca erori, si acest FOR va lua fiecare element al obiectului, si le va arata sub forma de 
//alerta 
else    {
    for (let i = 0; i < raspuns.length ; i++) {
        alert(raspuns[i]);
    }
}

// reset inputs

}) 

bodyTable.addEventListener("click", (e) => {

    let obj = e.target;
    // am adaugat o clasa in fct createRow, pentru a putea sa selectam doar randul care contine designer al elementelor
    if (obj.classList.contains("asta")) {

        if(designerSelectat !== "") {
            designerSelectat.classList.remove("selectat") // sa scoata clasa selectat, inainte de a adauga clasa selectat unui alt element prin e.target 
        }
        

        obj.classList.add("selectat");    


        obiectSelectat = obj.textContent;    // textContent pentru ca vrem ca obiectSelectat sa preia toti descendentii  - adica va sterge toate elementele pe care le gaseste la fel 
        designerSelectat = obj; // stocam la final de functie designerSelectat, ca sa il putem sterge la inceput de functie

}   

let adidas = getShoeByModel(shoes,obiectSelectat);

    designerEdit.value = adidas.designer;
    modelEdit.value = adidas.model;
    sizeEdit.value = adidas.size;
    priceEdit.value = adidas.price;


})

deletion.addEventListener("click",  () =>   {
    
    shoes = eliminareIntrare(shoes, obiectSelectat);
    populateTable(shoes);

    resetInputs();

})

edit.addEventListener("click", () => {

})

populateTable(shoes);