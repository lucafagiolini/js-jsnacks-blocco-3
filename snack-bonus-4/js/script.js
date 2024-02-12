// chiedere all'utente una parola
let parola = prompt("Inserisci una parola");

function ordinaParole(parola) {
    return parola.split("").sort().join("");
}


console.log(ordinaParole(parola));
document.getElementById('result').innerHTML = "result in ordine alfabetico: " + ordinaParole(parola);

