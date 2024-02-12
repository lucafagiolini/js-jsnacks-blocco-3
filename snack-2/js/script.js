// creo un array 
let ham = ["pane", "ketchup", "cetrioli"];
console.log(ham);
// creo il secondo array
let burger = ["hamburger", "formaggio", "insalata"];
console.log(burger);

// creo una funzione che mi permette di unire i due array
function ominoMacdonalds(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i], b[i]);
    }
    return result;
}

// stampo il risultato
console.log(ominoMacdonalds(ham, burger));
document.getElementById("result").innerHTML = ominoMacdonalds(ham, burger);