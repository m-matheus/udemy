function main() {
    // declarando o formulario para poder usa-lo com o submit.
    let formulario = document.querySelector('#form');
    
    // criando a função para cálculo do IMC, com o parâmetro "calculo"
    function calculoIMC(calculo) {
        // pegando a input peso e altura do usuario, e já convertendo ela para type number "parseFloat()" e selecionando não a "input", mas sim o valor dentro dela com ".value".
        // variaveis precisam ser criadas dentro da função do cálculo.
        let peso = parseFloat(document.querySelector('#peso').value);
        let altura = parseFloat(document.querySelector('#altura').value);
        
        calculo.preventDefault();
        let calculadora = peso / Math.pow(altura, 2);
        
        if (calculadora < 18.5)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Abaixo do peso).</p>`
        }
        else if (calculadora >= 18.5 && calculadora <= 24.9)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Peso Normal).</p>`  
        }
        else if (calculadora >= 25 && calculadora <= 29.9)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Sobrepeso).</p>`  
        }
        else if (calculadora >= 30 && calculadora <= 34.9)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Obesidade grau 1).</p>`  
        }
        else if (calculadora >= 35 && calculadora <= 39.9)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Obesidade grau 2).</p>`  
        } 
        else if (calculadora > 40)
        {
            resultado.innerHTML = `<p>O seu IMC é ${calculadora.toFixed(2)} (Obesidade grau 3).</p>`
        }
        if (isNaN(peso)) {
            resultado.innerHTML = `<p>Peso inválido.</p>`
        }
        if (isNaN(altura)) {
            resultado.innerHTML = `<p>Altura inválida.</p>`
        }
        
    }
    formulario.addEventListener('submit', calculoIMC);

}
main();