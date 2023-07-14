let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // converte o num 1 temporariamente para string, mas a variavel continua sendo um number
console.log(typeof num1);

// para alterar o valor permanentemente para string:
num1 = num1.toString();
console.log(typeof num1);

// para passar a string para binario podemos usar:
let num3 = 1500;
console.log(num3.toString(2));

// para escolher quantas casa depois da virgula
let num4 = 3.5048465643834;
console.log(num4.toFixed(3));

console.log(Number.isInteger(num3)); // true
console.log(Number.isInteger(num4)); // false

let temp = num4 * 'Olá';
console.log(Number.isNaN(temp)); // true. no caso: sim o numero é um nao numero

let num5 = .7;
let num6 = .1;
console.log(num5 + num6);
// o javascript tem um problema com imprecisao. pode ser resolvido fazendo:
console.log(parseFloat((num5 + num6).toFixed(2)));
