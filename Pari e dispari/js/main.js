// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di scegliere pari/dispari

const even_odd = prompt("Pari o dispari?");

console.log(even_odd);

// Chiedo un numero all'utente

const inputNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log(inputNumber);

// Genero un numero casuale per il computer

function generateRandomNumber(min, max) {
    const comNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return comNumber;
}

console.log(generateRandomNumber(1, 5));

// Somma dei numeri

let sum = inputNumber + generateRandomNumber(1, 5);

console.log(sum);

// Stabilire se la somma e' pari o dispari

if (Even(sum)) {
    alert("La somma e' pari!");
}
else { alert("La somma e' dispari!") }


function Even(sum) {
    if (sum % 2 == 0) {
        return true;
    }
    return false;

}

// Dichiarazione vincitore 

