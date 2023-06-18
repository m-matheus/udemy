function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}

let timer = setInterval(function() {console.log(mostraHora());}, 1000); 
// setInterval(funcao, intervalo de tempo em ms) -> executa funcao de tempos em tempos

setTimeout(function() {clearInterval(timer);}, 10000);