const num1 = 5;
const num2 = 2;
const num3 = '5';

let concatenar = num3 + num2; // concatenar trata os dois numeros como strings (ja que o num3 esta como string)
let adicao = num1 + num2; // soma
let subtracao = num1 - num2; // substracao
let multiplicacao = num1 * num2; // multiplicacao
let divisao = num1 / num2; // divisao

let potencia = num1 ** num2; // potenciacao
let resto = num1 % num2; // resto da divisao de num1/num2

let cont = 0;
cont++; // incrementar valor
cont--; // decrementa valor
++cont; // tambem funciona
cont += 2; // = cont = cont + 2; -> operador de atribuicao
cont *= 2; // = cont = cont * 2;

// NaN = not a number -> erro de tentar fazer alguma conta com um number e outro tipo de variavel.

const num4 = parseInt('5'); // converte string para int
const num5 = parseFloat('5.2'); // converte string para float
const num6 = Number('5.2'); // converte string para "number" independente de ser float ou inteiro