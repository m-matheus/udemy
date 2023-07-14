// OBJETOS: colocar um grupo de variavel em uma variavel
const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Moraes',
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    }
};
pessoa1.fala();


const pessoa2 = {
    nome: 'Michelle',
    sobrenome: 'Oliveira',
    idade: 20
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);



// usar objeto dentro de uma funcao:
function criaPessoa (nome, sobrenome, idade) { // "nome, sobrenome, idade" são parametros
    return {
        nome: nome, // pode abreviar para apenas nome
        sobrenome, // dessa forma <<
        idade: idade
    }
}

const pessoa3 = criaPessoa('Matheus', 'Moraes', 23); // "Matheus, Moraes, 23" são argumentos dos parametros (valor passado para o parametro)


