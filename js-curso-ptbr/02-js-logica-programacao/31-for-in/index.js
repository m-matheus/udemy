const frutas = ['Pera', 'Maçã', 'Uva'];

// for in: lê os índices ou chaves do objeto.
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome:'Matheus',
    sobrenome: 'Moraes',
    idade: 23
};


for (let i in pessoa) {
    console.log(pessoa[i]);
}

// formas de acessar um atributo do objeto:
console.log(pessoa.nome);
console.log(pessoa['nome']);
const chave = 'nome';
console.log(pessoa[chave]);