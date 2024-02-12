// creo un array di numeri
let numbers = [0, 1, 2, 3, 4, 5, 6];
console.log(numbers);

// NON SONO SICURO AL 100% DI AVER CAPITO BENE LA CONSEGNA DI QUESTO SNACK E QUINDI NON SONO SICURO DI AVERLO SVOLTO CORRETTAMENTE
function processArray(array, a, b) {
    if (a < b && b <= array.length) {
        return array.slice(a, b);
    }
    else {
        return "Errore";
    }
}

console.log(processArray(numbers, 2, 4));
document.getElementById('result').innerHTML = processArray(numbers, 2, 4);