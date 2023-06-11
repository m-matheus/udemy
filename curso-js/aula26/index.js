/* 
    para usar funcões construtoras, usamos a palavra new antes dela (ex: new Date), obs: a primeira letra do nome da função construtora é maiuscula
*/

/*
    let data = new Date();
    console.log(data.toString());
*/
// alguns exemplos de como usar o Date (existem mais na literatura)

/* 
    console.log('Dia', data.getDate());
    console.log('Mês', data.getMonth()); // Mês começa do zero
    console.log('Ano', data.getFullYear());
    console.log('Hora', data.getHours());
    console.log('Min', data.getMinutes());
    console.log('Seg', data.getSeconds());
    console.log('ms', data.getMilliseconds());
    console.log('Dia da semana', data.getDay()); // 0 = domingo, 6 = sabado
*/


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    let dia = zeroAEsquerda(data.getDate());
    let mes = zeroAEsquerda(data.getMonth() + 1);
    let ano = zeroAEsquerda(data.getFullYear());
    let hora = zeroAEsquerda(data.getHours());
    let min = zeroAEsquerda(data.getMinutes());
    let seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


let data = new Date();
let dataBrasil = formataData(data);
console.log(dataBrasil);


