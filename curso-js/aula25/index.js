let userPunctuation = 1000;

if (userPunctuation >= 1000) {
    console.log('Usuário Vip');
}
else {
    console.log('Usuário normal');
}

/* 
    Usando a operação ternária, podemos escrever a mesma coisa com menos comando, sendo dada pelo seguinte:
    (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
*/

let userLevel = (userPunctuation >= 1000) ? 'Usuário Vip' : 'Usuário normal';
console.log(userLevel);

/*
    Podemos criar uma variavél com valor padrão, com uma condição OR para podermos
    deixar o usuario escolher.
    ex: se o usuario escolher a cor, ela vai ser a cor escolhida, se ele n escolher nada, será a cor padrao
*/

let userColor = null; // quando userColor for null, por padrao será setado a 'preta'
let defaultColor = userColor || 'Preta';