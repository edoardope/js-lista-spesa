let articoli = [
    "latte",
    "pane",
    "cereali",
    "sapone mani",
    "cibo cane",
    "acqua frizzante"
]

let i = 0

while ( i < articoli.length) {

    document.querySelector(`#contenitorelista`).innerHTML += ` ${articoli[i]}, `

    i++

}