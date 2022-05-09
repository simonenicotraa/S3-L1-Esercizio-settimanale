

var nome = window.prompt('Inserisci Nome');
document.getElementById('inser_name').innerHTML = nome;


var cognome = window.prompt('Inserisci Cognome');
document.getElementById('inser_surname').innerHTML = cognome;


var eta = window.prompt('Inserisci la tua età');
document.getElementById('inser_age').innerHTML = eta;


var citta = window.prompt('Inserisci Città');
document.getElementById('inser_city').innerHTML = citta;



var mail = window.prompt('Inserisci email');
document.getElementById('inser_mail').innerHTML = mail;

/* var info= nome cognome eta citta mail; */



document.write(nome, ' ', cognome, ' ', eta, ' ', citta, ' ', mail);



console.log (nome, ' ', cognome, ' ', eta, ' ', citta, ' ', '(', mail, ')');

window.alert (nome +' ' + cognome +' ' + eta +' ' + citta + '('+ mail +')');