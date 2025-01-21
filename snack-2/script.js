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
people.forEach(function(person, index) {

  // Aggiungi il nome con gli apici alla stringa namesString
  namesString += `'${person.name}'`;

  // Aggiungi una virgola e uno spazio se non è l'ultimo nome
  if (index < people.length - 1) {
    namesString += ', ';
  }

});

// Stampa il risultato
console.log(namesString);