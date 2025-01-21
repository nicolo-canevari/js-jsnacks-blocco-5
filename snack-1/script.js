const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


// Aggiungo il nome corrente all'output
let result = '';

// ciclo for
for (let i = 0; i < names.length; i++) {

  result += names[i];
  if (i < names.length - 1) {

    // Stampo la variabile result che conterrà tutti i nomi separati da una virgola
    result += ', ';

  }

}

// debugging
console.log(result);