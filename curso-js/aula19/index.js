// valores primitivos sao imutaveis - string, number, boolen, undefined, null
let a = 1;
let b = a; // faz uma copia mas nao altera o valor
a = 2; // mudando valor de a
console.log(a, b); // nota-se que o valor de b continuou em 1



// referencia (mutavel) - array, object, function
let c = [1, 2, 3];
let d = c; // aponta para o mesmo lugar na memoria/ passado por referencia

c.push(4); // alterando valor de c
console.log(c, d); // o valor de c e d mudaram