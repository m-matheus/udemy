// escreva uma função que recebe 2 números e retorne o maior deles


function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2; // condição ternaria
}
let mostraMaior = maiorNumero(3, 2);
console.log(mostraMaior);


// função usando arrow function
let maxNumber = (x, y) => x > y ? x : y;
console.log(maxNumber(10, 5));