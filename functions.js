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



function createNewRow() {
    let text = `
    <div class="editable-section">
    <input>
    <input>
    <input>
    <input>
    </div>
    `
    return text;
}




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

        let text = "";

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

function eliminareIntrare (arr,model) {

        let nou = [];

        for(i=0;i<arr.length;i++){
                //transforma tot to lowercase
            if (arr[i].model.toLowerCase() !== model.toLowerCase()) {
                nou.push(arr[i]);
            }
        }

        return nou;

    }


    // function createEditSection (arr) {

    //     for(i=0;i<arr.length;i++) {

    //         if (arr[i].classList.contains(""))


    //     }
        
    // }