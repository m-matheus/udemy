function main() {
    // declarando variaveis
    let relogio = document.querySelector('.relogio');
    let iniciar = document.querySelector('.iniciar');
    let pausar = document.querySelector('.pausar');
    let zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    function getTimeFromSeconds(seconds) {

        let data = new Date(seconds * 1000); // *1000 por ser padrao em ms e eu querer em s.

        return data.toLocaleTimeString('pt-Br', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'GMT'
        });
    }

    // funções que adicionam elementos e interagem com o html
    function startClock() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    function stopClock() {
        clearInterval(timer);
    }

    function zerarClock() {
        clearInterval(timer);
    }

    // outra forma de fazer o evento click com varios elementos
    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            startClock();
            relogio.style.color = 'green';
        }
        if (elemento.classList.contains('pausar')) {
            stopClock();
            relogio.style.color = 'red';
        }
        if (elemento.classList.contains('zerar')) {
            zerarClock();
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.style.color = 'black';
        }
    })


    // chamadas das funções com os botoes
    iniciar.addEventListener('click', function (event) {

    });

    pausar.addEventListener('click', function (event) {

    });

    zerar.addEventListener('click', function (event) {

    });

}
main();
