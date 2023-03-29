// let articoli = [
//     "latte",
//     "pane",
//     "cereali",
//     "sapone mani",
//     "cibo cane",
//     "acqua frizzante"
// ]

// let i = 0

// while ( i < articoli.length) {

//     document.querySelector(`#contenitorelista`).innerHTML += `<li>${articoli[i]} <input id="remove${[i]}" type="button" value="remove"></li> `

//     i++

// }

// versione avanzata

//array articoli spesa
let articoli = [];

let i = 0;

const add = document.querySelector("#add");

//input text
add.addEventListener('click', function() {
    let inputspesa = document.querySelector('#inputspesa').value;
    articoli.push(inputspesa);
    document.querySelector('#inputspesa').value = "";
});

//bottone conferma
const spesafinita = document.querySelector("#spesafinita");

//liste
const lista = document.querySelector(`#contenitorelista`);
const listacomprati = document.querySelector(`#contenitorelista2`);

//attivazione ciclo post conferma
spesafinita.addEventListener('click', function() {
    //ciclo post conferma
    while (i < articoli.length) {
        let li = document.createElement("li");
        li.innerText = articoli[i];
        
        //bottone comprato
        let comprato = document.createElement("input");
        comprato.type = "button";
        comprato.value = "comprato";
        
        //bottone rimozione dalla lista
        let rimuovidallalista = document.createElement("input");
        rimuovidallalista.type = "button";
        rimuovidallalista.value = "rimuovi dalla lista";
        rimuovidallalista.classList.add("remove-item");
        
        //bottone articolo finito
        let finito = document.createElement("input");
        finito.type = "button";
        finito.value = "finito";
      
        //funzione click bottone comprato
        comprato.addEventListener('click', function() {
            li.classList.add("removed");
            if (li.parentElement === lista) {
                lista.removeChild(li);
                listacomprati.appendChild(li);
                li.appendChild(finito);
                li.removeChild(comprato);
            }
        });
        
        //funzione click bottone articolo finito
        finito.addEventListener('click', function() {
            if (li.parentElement === listacomprati) {
                listacomprati.removeChild(li);
                lista.appendChild(li);
                li.removeChild(finito);
                li.removeChild(rimuovidallalista);
                li.appendChild(comprato);
                li.appendChild(rimuovidallalista);
                li.classList.remove("removed");
            }
        });

        //funzione click bottone rimozione dalla lista
        rimuovidallalista.addEventListener('click', function() {
            li.remove();
            articoli.splice(i);
            i--;
        });

        li.appendChild(comprato);
        li.appendChild(rimuovidallalista);
        lista.appendChild(li);
        i++;
    }
});

//bottone rimuovi tutti
const removeall = document.querySelector("#removeall");

//funzione click bottone rimuovi tutti
removeall.addEventListener('click', function() {
    let liall = document.querySelectorAll('li');
    let j = 0;
    while (j < liall.length) {
        liall[j].remove();
        j++;
    }
    articoli = [];
    i = 0;
});

//bug noti usando la funzione per rimuovere i singoli elementi l'elemento dell'array con id 1 non viene rimosso
//me ne sono accorto solo dopo aver staccato e non ho voglia di rimettermi a sistemare appena possibile sistemerò il probblema
//inoltre vorrei far si che non si possano inserire elementi nell'array se non contengono testo