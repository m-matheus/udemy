// mesmo não enviando parametros, 
function funcao() {
    let total = 0;
    for (let argumento of arguments) { // arguments, sustenta todos argumentos enviados
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);


// caso eu tenho mais parametros do que argumentos, ele mostra undefined.
function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao1(1, 2, 3);


// dar valores padrao para os parametros, para o caso de não ter nenhum argumento, evitando que o valor seja undefined.
function funcao2(a, b = 0) { // dessa forma, caso n tenha o argumento, em vez de o b ser undefined, ele será 0.
    console.log(a + b);
}
funcao2(2);

// pedir um objeto e receber um objeto
function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'Matheus',
    sobrenome: 'Moraes',
    idade: '23'
}
funcao3(obj);

// pedir uma array e receber uma array
function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao4([1, 2, 3]);


// rest operator = ... -> todo resto dos argumentos, entram numa array.
// lembrando que o rest deve ser sempre o ultimo parametro.
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 20, 30, 40, 50);
// no caso, '+' entra no operador, 0 entra no acumulador e o resto em numeros (numa array).
 

// Ex:
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);