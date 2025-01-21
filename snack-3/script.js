const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


// vado a creare un nuovo array incrementando ogni numero di +1
const incrementedNumbers = numbers.map(function (number) {

    return number + 1;

});

// Stampo il risultato in console
console.log(incrementedNumbers);