let userWord = prompt("Inserisci una parola");



function rigiraParole(parola) {
    return parola.split("").reverse().join("");
}
document.getElementById("result").innerText = "result: " + (rigiraParole(userWord));

console.log(rigiraParole(userWord));

