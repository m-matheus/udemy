// dentro de uma função é possivel acessar os "vizinhos"
const nome = 'Matheus'; // vizinho (fora da função)

function falaNome() {
    console.log(nome);
}

// mesmo executando a função aqui, e tendo outra const nome mais proxima da execução, a funcão lembra de onde foi criada e respeita o escopo dela (primeiro procura dentro dela e depois vai procurando no pai, e depois no pai do pai e etc...)

function usaFalaNome() {
    const nome = 'Moraes';
    falaNome();
}
usaFalaNome();