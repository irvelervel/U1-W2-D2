// ARRAY IN JS
// un array è una collezione (lista) di valori

const names = ['stefano', 'giovanni', 'giulia', 'alessandro']
const numbers = [5, 70, -3, 20.4]
const values = [true, true, false, true, true, false]

const mixed = [20, 'ciao', true] // si usa poco...
const objects = [
  { firstName: 'Jill' },
  { firstName: 'Chris' },
  { firstName: 'Barry' },
]

// per accedere ad un elemento in un array l'unico "indizio" è la sua POSIZIONE, detta INDICE
// gli array in JS sono zero-index based

// "stefano" è il primo elemento dell'array names --> avrà indice 0
// "giovanni" è il secondo elemento dell'array names --> avrà indice 1
// "giulia" è il terzo elemento dell'array names --> avrà indice 2
// "alessandro" è il quarto elemento dell'array names --> avrà indice 3

// per accedere ad un elemento specifico di un array, si utilizza la square brackets notation:
// array[indice]
console.log(names[2]) // "giulia"
console.log(numbers[1]) // 70

// ogni array ha una LUNGHEZZA, che viene determinata dal numero di elementi in esso contenuto
// possiamo leggere la lunghezza di un array tramite una proprietà che si chiama "length"
console.log(names.length) // 4
console.log(values.length) // 6

// per accedere al primo elemento di un array si cerca la posizione 0
console.log(numbers[0]) // primo elemento di numbers, 5

// per accedere all'ultimo elemento di un array, possiamo utilizzare la lunghezza e togliere 1
console.log(numbers[numbers.length - 1]) // ultimo elemento di numbers, 20.4
// che sarebbe come dire console.log(numbers[4 - 1]) --> numbers[3]
