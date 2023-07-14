let numero = prompt("Digite um número: ");
numero =Number(numero);


const numeroTitulo = document.getElementById('numero');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}<br>${numero} é inteiro: ${Number.isInteger(numero)}<br>É NaN: ${Number.isNaN(numero)}<br>Arredondando para baixo: ${Math.floor(numero)}<br>Arredondando para cima: ${Math.ceil(numero)}<br>Com duas casas decimais: ${numero.toFixed(2)}</p>`
