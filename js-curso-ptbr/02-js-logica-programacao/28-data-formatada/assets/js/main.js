function main() {
    /* let data = new Date();

    let semana = data.getDay();
    function diaDaSemana(semana) {
        let diaSemana;

        switch (semana) {
            case 0:
                diaSemana = 'Domingo';
                return diaSemana;
            case 1:
                diaSemana = 'Segunda-feira';
                return diaSemana;
            case 2:
                diaSemana = 'Terça-feira';
                return diaSemana;
            case 3:
                diaSemana = 'Quarta-feira';
                return diaSemana;
            case 4:
                diaSemana = 'Quinta-feira';
                return diaSemana;
            case 5:
                diaSemana = 'Sexta-feira';
                return diaSemana;
            case 6:
                diaSemana = 'Sábado';
                return diaSemana;
        }
    }
    let diaSemana = diaDaSemana(semana);
    console.log(diaSemana);

    function numDia() {
        return numeroDoDia = data.getDate();
    }
    let dia = numDia();
    console.log(dia);

    let mes = data.getMonth();
    function mesDoAno(mes) {
        let mesAno;

        switch (mes) {
            case 0:
                mesAno = 'Janeiro';
                return mesAno;
            case 1:
                mesAno = 'Fevereiro';
                return mesAno;
            case 2:
                mesAno = 'Março';
                return mesAno;
            case 3:
                mesAno = 'Abril';
                return mesAno;
            case 4:
                mesAno = 'Maio';
                return mesAno;
            case 5:
                mesAno = 'Junho';
                return mesAno;
            case 6:
                mesAno = 'Julho';
                return mesAno;
            case 7:
                mesAno = 'Agosto';
                return mesAno;
            case 8:
                mesAno = 'Setembro';
                return mesAno;
            case 9:
                mesAno = 'Outubro';
                return mesAno;
            case 10:
                mesAno = 'Novembro';
                return mesAno;
            case 11:
                mesAno = 'Dezembro';
                return mesAno;
        }
    }
    let mesAno = mesDoAno(mes);
    console.log(mesAno);

    function numeroDoAno() {
        return numAno = data.getFullYear();
    }
    let ano = numeroDoAno();
    console.log(ano);

    function horas() {
        return horasAt = data.getHours();
    }
    let valorHoras = horas();
    console.log(valorHoras);

    function minutos() {
        return minutosAt = data.getMinutes();
    }
    let valorMinutos = minutos();
    console.log(valorMinutos);
    
    h1date.innerHTML = `${diaSemana}, ${dia} de ${mesAno} de ${ano}.<br>${valorHoras}:${valorMinutos}`; */

    const h1 = document.querySelector('#h1date');
    const data = new Date();
    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
}
main();