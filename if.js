// BLOCCO IF: LOGICA CONDIZIONALE

// un blocco IF è composto da una condizione e un "body"
// if(condizione){
// codice da eseguire
// }

// Se la condizione si verifica (torna true) il blocco di istruzioni verrà eseguito, altrimenti no

const myName = 'Giovanni'
const votoEsame = 20

if (myName === 'Stefano' && votoEsame > 18) {
  // entrerò qui dentro solamente se la condizione viene valutata TRUE
  console.log('Ti chiami Stefano e il voto è maggiore di 18')
}

if (myName === 'Stefano' || votoEsame > 18) {
  // entrerò qui dentro solamente se la condizione viene valutata TRUE
  console.log('Ti chiami Stefano oppure il voto è maggiore di 18')
}

// la condizione dentro l'if si comporrà degli operatori di comparazione che abbiamo già visto:

// < > <= >= === !==
