function saudacao(nome) { // o (nome) é um parametro.
    console.log(`Bom dia ${nome}!`);
    return 1;
}

const variavel = saudacao('Matheus'); // valor a ser atribuido ao parametro

console.log(variavel); // por padrao as funcoes retornam undefined, porem podemos definir um valor com "return"

// jeito moderno de fazer funcao
let raiz1 = n => n ** 0.5; // funcao que calcula raiz

// a funcao a cima é o mesmo que:
let raiz2= function(n) {
    return n ** 0.5;
};

console.log(raiz1(9));
console.log(raiz2(9));