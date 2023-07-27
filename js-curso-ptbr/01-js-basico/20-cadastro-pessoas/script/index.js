function main() {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    /* form.onsubmit = function(event) {
        event.preventDefaul();
    }; */

    let pessoas = [];

    function eventoForm(evento) {
        evento.preventDefault();
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome Completo: ${nome.value} ${sobrenome.value}<br>Peso: ${peso.value}<br>Altura: ${altura.value}</p>`

    }
    form.addEventListener('submit', eventoForm)
}
main();