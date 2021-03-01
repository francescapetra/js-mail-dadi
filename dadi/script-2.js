// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var giocatore = Math.floor(Math.random( ) *6 )+ 1;
console.log(giocatore);
var computer = Math.floor(Math.random( ) *6 )+ 1;
console.log(computer);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (giocatore > computer) {
  alert("ha vinto giocatore con il numero: " + giocatore );
}
else if (computer> giocatore) {
  alert("ha vinto computer con il numero: " + computer );
}
else {
  alert("Siete pari con il numero: " + giocatore );
}
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
