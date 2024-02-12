// creo un array di numeri
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// creo un array di lettere
let letters = ["a", "b", "c", "d", "e"];
console.log(letters);


function processArray(array, a, b) {
    if (a < b && b <= array.length) {
        return array.slice(a, b);
    }
}

console.log(processArray(letters, 1, 3));