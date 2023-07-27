// calcular numeros pares e impares
for (let i = 0; i <= 5; i++) {
    let par = [i] % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Goiaba', 'Banana', 'Morango', 'Mamão', 'Manga'];

for (i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}