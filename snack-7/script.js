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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


// Trova lo studente con id 2
const student = students.find(function(student) {

  // La condizione deve essere che id è uguale a 2
  return student.id === 2;

});

// Stampa il risultato in console
console.log(student);
