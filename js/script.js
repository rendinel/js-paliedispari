
var min = 1;
var max = 5;

var oddOrEven = prompt('Pari o Dispari?');
var numberUser;
if (oddOrEven === 'Pari' || oddOrEven === 'Dispari') {
  numberUser = parseInt(prompt('Scegli un numero da 1 a 5'));
} else {
  alert("Segui le istruzioni");
}

if (numberUser === 1 || numberUser === 2 || numberUser === 3 || numberUser === 4 || numberUser === 5) {
  numberPc = Math.floor(Math.random() * (max - min) ) + min
  sum = numberPc + numberUser
  console.log('Il risultato è: ' + sum);
} else {
  alert('Segui le istruzioni');
}

// if (sum % 2 === 0) {
//   sum = 'Pari'
// } else {
//   sum = 'Dispari'
// }
//
// if (sum = 'Pari' || sum = 'Dispari') {
//   oddOrEven === sum
//   alert('Hai vinto')
// } else {
//   alert('Hai Perso')
// }
