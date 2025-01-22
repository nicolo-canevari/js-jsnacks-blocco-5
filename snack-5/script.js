// array di numeri
const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


// Crea un array con solo i numeri pari
const evenNumbers = nums.filter(function (num) {

    // Verifico se il numero è pari
    return num % 2 === 0;

});

// Stampa il risultato in console
console.log(evenNumbers); 