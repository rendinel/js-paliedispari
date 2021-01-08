
// var min = 1;
// var max = 5;
function randomNumber (min, max)  {
  return Math.floor(Math.random() * (max - min) ) + min
}

var oddOrEven = prompt('Pari o Dispari?');
var numberUser;
if (oddOrEven === 'Pari' || oddOrEven === 'Dispari') {
  numberUser = parseInt(prompt('Scegli un numero da 1 a 5'));
} else {
  alert("Segui le istruzioni");
}

// if (numberUser === 1 || numberUser === 2 || numberUser === 3 || numberUser === 4 || numberUser === 5) {
//   numberPc = randomNumber (1, 5)
//   sum = numberPc + numberUser
//   console.log('Il risultato è: ' + sum);
// } else {
//   alert('Segui le istruzioni');
// }

if (numberUser !== 0 && numbers <= 5  ) {
  numberPc = randomNumber (1, 5)
  sum = numberPc + numberUser
  console.log('Il risultato è: ' + sum);
} else {
  alert('Segui le istruzioni');
}

if (sum % 2 === 0 && oddOrEven === 'Pari' ) {
  alert('Hai vinto')
} else if (sum % 2 !== 0 && oddOrEven === 'Dispari' ) {
  alert('Hai vinto')
} else {
  alert('Hai perso')
}
