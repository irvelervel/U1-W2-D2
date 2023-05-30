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

numbers.sort()
console.log(numbers)

// AGGIUNGERE UN ELEMENTO IN CODA ALL'ARRAY
const fruits = ['banana', 'apple', 'orange', 'peach']

fruits.push('watermelon') // push inserisce un nuovo elemento nell'array IN CODA
console.log('fruits', fruits)
console.log(fruits[4]) // in origine questo era undefined! ora diventa "watermelon"

// RIMUOVERE L'ULTIMO ELEMENTO DA UN ARRAY
fruits.pop() // elimina l'ultimo elemento
console.log('fruits', fruits) // non c'è più "watermelon"

// RIMUOVERE UN ELEMENTO DA UNA POSIZIONE IN UN ARRAY
// delete fruits[2] // svuota un valore, ma non accorcia l'array :(
fruits.splice(2, 1)
console.log('fruits', fruits)

let array1 = [1, 2, 3]
let array2 = array1

array2.pop()
console.log(array1) // ho modificato anche l'array originale! stesso discorso degli oggetti!
