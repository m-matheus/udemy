/* 
    Escreva uma função chamada ePaisagem que recebe dois argumentos, altura e largura de uma imagem (number).
    Retorne true se a imagem estiver no modo paisagem.
*/

/* function ePaisagem(altura, largura) {
    if (altura < largura) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ePaisagem(10, 30)); */

//variavel nomeDaFuncao = (argumentos) => codigo da funcao
/* let ePaisagem = (largura, altura) => altura < largura ? true : false;
console.log(ePaisagem(50, 30)); */

// por padrao se uma condição é verdadeira, ela retorna true se não false, dessa forma:
let ePaisagem = (largura, altura) => altura < largura;
console.log(ePaisagem(50, 30));