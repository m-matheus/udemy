const numeros = [100, 200, 300, 400, 500, 600, 700];
const [primeiroNumero, segundoNumero, ...resto] = numeros; 
/* 
    podemos atribuir valores das array por desestruturação, [] da esquerda.
    também podemos selecionar os valores restantes da array com ...
*/
console.log(primeiroNumero, segundoNumero);
console.log(resto);

//                          0          1          2     -- indices
//                       0  1  2    0  1  2    0  1  2  -- indices
const outrosNumeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(outrosNumeros[1][2]); // 6


// também podemos usar atribuição por desestruturação com objetos:
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Moraes',
    idade: 23,
    endereco: {
        rua: 'Jorge Lacerda',
        numero: 92
    }
};

const { nome: teste, sobrenome } = pessoa; // podemos especificar a chave "nome" e dar um nome diferente pra variavel
console.log(teste, sobrenome);