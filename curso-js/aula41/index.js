function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try { // codigo que potencialmente pode ter algum erro
    let data = new Date('01-01-1970 12:58:12'); // se colocar na funcao a variavel data, retorna a variavel
    let hora = retornaHora(); // se colocar algum valor invalido da o erro
    console.log(hora);
} catch(e) {
    // tratar o erro
} finally {

}

