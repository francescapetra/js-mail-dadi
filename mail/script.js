// Elenco email ammesse
var listaemail = ["rosso@mail.com", "verde@mail.com", "blu@mail.com", "giallo@mail.com", "arancione@mail.com", "viola@mail.com", "indaco@mail.com", "aqua@mail.com"];
// console.log (listaemail);

// Chiedi all’utente la sua email,
var email = prompt("inserisci la tua email");
console.log (email);

// controlla che sia nella lista di chi può accedere,
var messaggio = "";

for (var i = 0; i < listaemail.length; i++) {
   console.log (listaemail[i]);

// stampa un messaggio appropriato sull’esito del controllo.
   if (email == listaemail[i] ) {
     messaggio ="UTENTE AUTORIZZATO";
     console.log (messaggio);
   }
}
