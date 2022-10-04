// functie ce primeste ca parametru un obiect si returneaza un row 

function createRow(obj) {
    let text =`
    <tr>
        <td>${obj.designer}</td>
        <td class="asta">${obj.model}</td>
        <td>${obj.size}</td>
        <td>${obj.price}</td>
    </tr>
    `
    return text;
}


// de ce nu merge aceasta functie de create Row?
// function createNewRow() {
//     let text = `
//     <div class="editable-section">
//     <p>Hello</p>
//     </div>
//     `
//     return text;
// }




// functie ce populeaza tabelul / injecteaza HTML

function populateTable (arr) {
    let text = "";

    for(i=0;i<arr.length;i++) {

        text += createRow(arr[i]); 
    }

    let nextRow = document.querySelector(".table-body");
    nextRow.innerHTML = text;
}

// functie ce ia informatiile din inputuri si le injecteaza in tabel,sub forma unui rand

function getShoe () {

    let designer = document.querySelector(".designer");
    let model = document.querySelector(".model");
    let size = document.querySelector(".size");
    let price = document.querySelector(".price");

    let shoe = {
        designer: designer.value,
        model: model.value,
        size: size.value,
        price: price.value
    }

    if (shoe.designer !== "" && shoe.model !== "" && shoe.size !== "" && shoe.price !== "") {
        return shoe;
    } else {

        

        let erors = [];

        if (shoe.designer === "") {
            erors.push("Nu s-a introdus un designer")
            // let sol = document.querySelector(".designer")
            // sol.style.border = "2px solid magenta";
            // sol.placeholder = "required field"
        }

        if (shoe.model === "") {
            // injectam un atribut CSS in IF 
            // let sol = document.querySelector(".model")
            // sol.style.border = "2px solid magenta";
            // sol.placeholder = "required field"
            erors.push("Nu s-a introdus un model")
        }

        if (shoe.size == 0 ) {
            // let sol = document.querySelector(".size")
            // sol.style.border="2px solid magenta"
            // sol.placeholder = "required field";
            erors.push("Nu s-a introdus un numar")
        }

        if (shoe.price == "") {
            // let sol = document.querySelector(".price")
            // sol.placeholder = "required field"
            // sol.style.border="2px solid magenta"
            erors.push("Nu s-a introdus pretul")
        }

        return erors;   
    }

    }

//functie ce primeste un array si un parametru, si creaza un nou array fara elementul cu parametrul dat 
function eliminareIntrare (arr,model) {

        let nou = [];

        for(i=0;i<arr.length;i++){
                //transforma tot to lowercase
            if (arr[i].model !== model) {
                nou.push(arr[i]);
            }
        }

        return nou;

    }


function resetInputsNewItem () {
    inputs.forEach(input => {
        input.value = "";
})
}

// reset inputs
function resetInputs () {
    

designerEdit.value = "";
modelEdit.value = "";
sizeEdit.value="";
priceEdit.value="";
    }


//functie de preia un element si returneaza un obiect 

function getShoeByModel (arr,model) {

    let x = "";

    for (i=0;i<arr.length;i++) {
        
        if(arr[i].model == model){
            x = arr[i];
        }

    }
        return x;

}


function updateShoe (arr,model) {
    // arrayul devine un array nou, fara intrarea cu modeul pe care vrem sa o selectam
    arr = eliminareIntrare(arr,model);
    // dupa ce am eliminat elementul pe care vream sa il stergem, adaugam un altul nou
    arr.push(model);
    return arr;

}