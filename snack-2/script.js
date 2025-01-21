// array di oggetti
const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


// Variabile per raccogliere i nomi
let namesString = '';

// forEach scorre l'array people
people.forEach(function (person, index) {

  // Aggiungi il nome con gli apici alla stringa namesString
  namesString += `'${person.name}'`;

  // Se non è l'ultimo nome dell'array aggiungo una virgola e uno spazio
  if (index < people.length - 1) {

    // Virgola e spazio tra i "name" dell'array
    namesString += ', ';

  }

});

// Stampa il risultato in console
console.log(namesString);