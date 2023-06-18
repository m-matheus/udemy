let nomes = ['Matheus', 'Michelle', 'Marte']
// mostra o valor de cada indice 
for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})

/* 
    for clássico - geralmente com iteráveis (arrays ou strings)
    for in - retorna o indice ou chave (string, array ou objetos)
    for of - retorna o valor em si (iteráveis, arrays ou strings)
*/
