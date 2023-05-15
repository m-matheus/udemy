let umaString = "Um \"texto\"";
// outra forma de usar aspas dentro do texto

//                 01234567 -> números dos indices
let outraString = "Um texto";
console.log(outraString[5]); // irá imprimir o x

console.log(outraString.charAt(6)); // mostra o valor do indice

console.log(outraString.indexOf('texto', 3)); // retorna o valor do indece selecionado.
// tambem pode ser parametrizado para comecar a procurar de um determinado indice.
// tambem existe o lastindexof -> comeca a busca pelo ultimo indice.

// /a/ -> expressao regular

console.log(outraString.match(/[a-z]/g)); // procura na string alguma letra daquela. (usando expressoes regulares)

console.log(outraString.search(/x/)); // procura na string

console.log(umaString.replace('Um', 'Outro'));

let exemploGrande = "O rato roeu a roupa do rei de roma.";

console.log(exemploGrande.replace('r', '#'));
console.log(exemploGrande.replace(/r/g, '#'));

// da segunda forma, com expressao regular e o "g", modifica todos os r da string

console.log(umaString.length); // retorna valor da string

console.log(umaString.slice(2, 5)); // mostra o que tem do indice 2 ao 5

console.log(umaString.split(' ', 3)); // divide a string pelo parametro que foi passado, no caso vai separar a string pelos espacos. 
// pode parametrizar a quantidade de resultados tambem

console.log(umaString.toUpperCase()); // deixar tudo em maiusculo

console.log(umaString.toLowerCase()); // deixar tudo minusculo