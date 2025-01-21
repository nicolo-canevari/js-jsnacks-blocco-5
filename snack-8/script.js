// array di oggetti
const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


// Trova lo studente con nome 'Marco Lanci'
const marco = students.find(student => student.name === 'Marco Lanci');

// Metodo con '' con if else

// Imposto la variabile vuota
let marcoClass = '';

// Verifico se Marco è stato trovato
if (marco) {

  // Se Marco è trovato, assegno la sua classe
  marcoClass = marco.class;

}

// Stampa il risultato in console
console.log(marcoClass);

