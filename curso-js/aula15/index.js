let num1 = 9.54578;

// arredondamento para baixo
let num2 = Math.floor(num1);
console.log(num2);

// arredondamento para cima
let num3 = Math.ceil(num1);
console.log(num3);

// arredonda para o valor mais proximo ex: 9,51 -> 10 | 9,49 -> 9 
let num4 = Math.round(num1);
console.log(num4);

// retorna o maior valor e "Math.min" retorna o minimo
console.log(Math.max(1, 2, 3, 4, 5, 10, -4, 50));

// numero aleatorio entre 0 e 1.
console.log(Math.random());

// potencia
console.log(Math.pow(2, 10));