const nome = 'Matheus';
const sobrenome = 'de Moraes';
const idade = 24;
const peso = 65;
const altura = 1.70;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg,');
// podemos separar let/var de strings com virgulas
console.log('tem ' + altura + ' de altura e seu IMC é de', + imc + '.');
// também podemos concatenar os valores
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
// ou podemos usar ` ` para colocar tudo junto, e separar as let/var com ${let/var}