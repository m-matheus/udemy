const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // seleciona o primeiro item da classe .container

const div = document.createElement('div'); // criando uma div no meu documento html

// percorrendo a array de objetos: elementos
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; //desestruturando o objeto
    let elemento = document.createElement(tag); // criando uma variavel para criar o elemento da tag
    elemento.innerHTML = texto; // colocando o texto no elemento
    div.appendChild(elemento); // adicionando os elementos na div
}

container.appendChild(div); // colocando a div no container

