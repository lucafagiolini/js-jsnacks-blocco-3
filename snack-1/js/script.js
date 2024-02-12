let userWord = prompt("Inserisci una parola");



function rigiraParole(parola) {
    return parola.split("").reverse().join("");
}

console.log(rigiraParole(userWord));
