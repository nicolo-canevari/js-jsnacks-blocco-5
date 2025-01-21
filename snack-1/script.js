// array di stringhe
const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


// Aggiungo una variabile vuota per accumulare i nomi
let result = '';

// ciclo for
for (let i = 0; i < names.length; i++) {

     // Aggiungo il nome corrente alla variabile result
    result += names[i];

    // Se non è l'ultimo nome dell'array
    if (i < names.length - 1) {

         // Aggiungi una virgola e uno spazio
        result += ', ';

    }

}

// Stampo il risultato in console
console.log(result);