function soma(a, b) {
    return a + b;
}
soma(2, 7); // retorna a soma de a e b

// algumas funções não retornam nada, mas executam algo util
/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
}); */


// função retornando objeto
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Matheus', 'Moraes');


// funções podem retornar outra função
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(2));
console.log(duplica(3));

