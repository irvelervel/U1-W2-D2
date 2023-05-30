// BLOCCO IF: LOGICA CONDIZIONALE

// un blocco IF è composto da una condizione e un "body"
// if(condizione){
// codice da eseguire
// }

// Se la condizione si verifica (torna true) il blocco di istruzioni verrà eseguito, altrimenti no

const myName = 'Giovanni'
const votoEsame = 20

if (myName === 'Stefano' && votoEsame > 18) {
  // false && true --> false, non entreremo nel blocco
  // entrerò qui dentro solamente se la condizione viene valutata TRUE
  console.log('Ti chiami Stefano e il voto è maggiore di 18')
}

if (myName === 'Stefano' || votoEsame > 18) {
  // false || true --> true
  // entrerò qui dentro solamente se la condizione viene valutata TRUE
  console.log('Ti chiami Stefano oppure il voto è maggiore di 18')
}

// la condizione dentro l'if si comporrà degli operatori di comparazione che abbiamo già visto:

// < > <= >= === !==

// ESEMPIO IF/ELSE

const eyeColor = 'greenish'

if (eyeColor === 'azure' || eyeColor === 'brown') {
  // blocco di codice se la condizione è vera
  console.log('Hai gli occhi azzurri oppure marroni!')
} else {
  // blocco di codice se la condizione è falsa
  console.log('Non hai gli occhi azzurri e neanche!')
}

const myAge = 18

if (myAge < 18) {
  console.log('non puoi entrare')
} else if (myAge > 18) {
  console.log('puoi entrare!')
} else {
  console.log('puoi entrare per un pelo!')
}

const anotherName = 'Mario'

const nullVariabile = undefined

if (anotherName) {
  console.log("ti chiami Mario!! l'università è da quella parte!")
}

// anotherName se valutato come condizione restituisce TRUE
// perchè la verifica di una variabile esistente è un valore TRUTHY
// così come valori numerici positivi/negativi a parte 0/-0

// valori FALSY: 0, -0, 0n, -0n, "", NaN, empty, false, null e undefined

// anche empty:
const array = [1, 2, 3]
delete array[0] // [empty, 2, 3]

if (array[0]) {
  console.log('si vede?')
}
