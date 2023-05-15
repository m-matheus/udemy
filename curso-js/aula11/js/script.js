alert('mensagem'); // atalho para window.alert() -> retorna undefined (nao leva a lugar nenhum na memoria).

confirm('alguma pergunta?'); // atalho para window.confirm() -> retorna um valor booleano.

prompt('insira uma mensagem'); // atalho para window.prompt() -> retorna uma string.

// podemos usar o valor booleano do confirm e coloca-lo em uma variavel
let confirma = confirm('confirma?'); // confirma recebe o valor true/false -> dependendo da resposta do usuario.

// o mesmo acontece com prompt, retornando uma string.