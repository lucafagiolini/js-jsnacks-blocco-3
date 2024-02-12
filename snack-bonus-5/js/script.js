// chiedo una frase all'utente
let frase = prompt('Inserisci una frase');
console.log(frase);

// cro uina funzione che applica la lettera maiuscola alla prima lettera della parola
function capitalizeInitials(frase) {
    return frase.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

console.log(capitalizeInitials(frase));
document.getElementById('result').innerHTML = "result: (text-capitalize) " + capitalizeInitials(frase);