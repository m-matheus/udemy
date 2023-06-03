let familia = ['matheus', 'michelle', 'apollo', 'jupiter'];
console.log(familia);
console.log(familia[3]);

familia[0] = 'teteu';
console.log(familia[0]);

// familia.lenght retorna o tamanho da array, e depois = 'martinho' adiciona mais um item na array
// familia[familia.lenght] = 'martinho';
// console.log(familia);

// tambem é possivel adicionar com a funcao push (no final):
familia.push('plutao');
console.log(familia);

// adiciona no começo
familia.unshift('plutao');
console.log(familia);

// remove o ultimo elemento
familia.pop('familia');
console.log(familia);

// remove o primeiro elemento
familia.shift('familia');
console.log(familia);

// deleta o elemento, mas nao apaga o indice
delete familia[2];
console.log(familia);

//fatiar a array
console.log(familia.slice(0, 3));
