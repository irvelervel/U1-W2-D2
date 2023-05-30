// JS RECAP
// TIPI DI DATO PRIMITIVI
// string
// number
// boolean
// undefined
// null
// symbol

let dog = 'Fido' // creazione e assegnazione di un valore ad una variabile ri-assegnabile
dog = 'Pluto' // poichè abbiamo utilizzato "let", è possibile ri-assegnare un valore in futuro

const cat = 'Tom' // creazione e assegnazione di un valore ad una variabile NON ri-assegnabile
// cat = "pippo" <-- errore!

// + - * / %
// < <= > >= === !==
// (3 < 5) <-- TRUE
// (3 > 5) <-- FALSE
let myName = 'Stefano'

// && <-- AND, concatena due o più condizioni in un'unica espressione, la cui veridicità sarà confermata
// solamente se TUTTE le condizioni sono TRUE
// ((3 < 5) && (myName === "Stefano")) <-- TRUE && TRUE <-- TRUE
// ((3 < 5) && (myName === "Giovanni")) <-- TRUE && FALSE <-- FALSE

// || <-- OR, concatena due o più condizioni in un'unica espressione, la cui veridicità sarà confermata
// solamente se ALMENO UNA delle condizioni è TRUE
// ((3 < 5) || (myName === "Stefano")) <-- TRUE || TRUE <-- TRUE
// ((3 < 5) || (myName === "Giovanni")) <-- TRUE || FALSE <-- TRUE
// ((3 > 5) || (myName === "Giovanni")) <-- FALSE || FALSE <-- FALSE

// TERNARY OPERATOR --> ? :
let isMyNameStefano = myName === 'Stefano' ? 'Sì' : 'No'
console.log(isMyNameStefano) // "Sì"

let isMyNameGiovanni = myName === 'Giovanni' ? 'Sì' : 'No'
console.log(isMyNameGiovanni) // "No"

let drivingLicense = 'B'

let whichCarsCanIDrive =
  drivingLicense === 'A' // drivingLicense è uguale ad "A" ?
    ? 'Motorcycles' // valore per whichCarsCanIDrive in caso positivo
    : drivingLicense === 'B' // valore per whichCarsCanIDrive in caso negativo, che in questa situazione invece pone una seconda domanda: drivingLicense è uguale a "B" ?
    ? 'Cars' // valore per whichCarsCanIDrive in caso positivo della seconda domanda
    : 'Nothing' // valore per whichCarsCanIDrive in caso negativo della seconda domanda

console.log(whichCarsCanIDrive) // "Cars"
