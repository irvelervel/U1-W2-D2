// OGGETTI IN JS
// ogni tanto ci ritroviamo a lavorare con dei dati che appartengono alla stessa "entità" (studente, animale domestico, computer)
// in JS è possibile "raggruppare" questi dati appartenenti alla stessa entità in un'unica risorsa: un OGGETTO

const obj = {}
// questo è un oggetto vuoto

const person = {
  // un oggetto è una lista potenz. infinita di coppie chiave/valore
  firstName: 'Jill',
  lastName: 'Valentine',
  age: 20,
  gender: 'f',
  presentFromTheFirstGame: true,
  initialWeapons: {
    gun: true,
    knife: true,
  },
  'name-of-team': 'Alpha',
}

console.log('person', person)
// come accedere alle singole proprietà? due metodi
// 1) DOT NOTATION -> oggetto.proprietà
console.log('age', person.age)
console.log('gun', person.initialWeapons.gun)
// console.log(person.name-of-team) <-- non funziona :(

// 2) SQUARE BRACKET NOTATION -> oggetto["proprietà"]
console.log('age', person['age'])
console.log('gun', person['initialWeapons']['gun'])
console.log('name-of-team', person['name-of-team']) // <-- funziona! :) unico modo valido per accedere a name-of-team

console.log(person.fullName) // undefined, non esiste in person una proprietà che si chiama "fullName"

// per MODIFICARE il valore di una chiave, utilizzeremo gli stessi metodi di "lettura" con una nuova assegnazione
person.age = 21 // lo posso fare anche se l'oggetto è stato inizializzato con const! non sto cambiando il valore di person,
// sto cambiando il valore di una sua sotto-proprietà
person['age'] = 22
console.log('person age', person.age)
// person = null // questa invece è una nuova assegnazione alla variabile person, poichè aveva "const"... ERRORE

// ELIMINIAMO UNA PROPRIETÀ DALL'OGGETTO PERSON
delete person.age // ho appena eliminato la proprietà "age" da person
console.log('person', person)

// AGGIUNGO UNA PROPRIETÀ ALL'OGGETTO PERSON
person.teamMates = 'Chris Barry Albert'
console.log('person', person)

let a = 5
let b = a
b = 10
console.log(a) // 5
console.log(b) // 10

const objA = {
  name: 'Stefano',
}

const objB = objA // <-- NON sto creando una copia dell'oggetto! sto creando solamente un nuovo metodo per accedervi!
// questa cosa succede solamente cercando di "clonare" variabili NON primitive
objB.name = 'Giovanni'
objB.surname = 'Storti'

console.log(objA) // ??? name è "giovanni" :( e c'ha pure surname! siamo andati a modificare anche objA!
