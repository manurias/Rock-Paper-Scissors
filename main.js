function manurias(minimo, massimo) {
  var numero = Math.floor(Math.random() * (massimo - minimo + 1) + minimo);
  return numero;
}

var sasso = 0;
var carta = 1;
var forbice = 2;

var opzioni = ["sasso", "carta", "forbice"];

var opzione_usuario;
var opzione_macchina = manurias(0, 2);

opzione_usuario = prompt("cosa scegli?\nSasso: 0\nCarta: 1\nForbice: 2", 0);

alert("hai scelto " + opzioni[opzione_usuario]);
alert("Javascript ha scelto " + opzioni[opzione_macchina]);

var risultati = [
  "Hai vinto!",
  "Hai perso",
  "Pareggio",
  "Hai vinto!",
  "Hai perso",
];

alert(opzione_usuario - opzione_macchina + 2);
