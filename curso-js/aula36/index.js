const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue; // continue -> passa pela condição (2) e retorna o loop
    }

    if (numero === 7) {
        break; // encerra o loop no 7
    }
    
    console.log(numero);
}