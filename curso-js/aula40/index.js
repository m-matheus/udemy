function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // lança um erro com throw
        throw new ReferenceError('x e y precisam ser números');
    }
    return x + y;
}

// tenta executar, caso de erro executa o catch
try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
}
catch(error) {
    // console.log(error); -> não colocar para o usuário
    console.log('Alguma coisa amigável para o usuário');
}


/* 
    try {} -> executa quando não há erro
    catch {} -> executa quando há erro
    finally {} -> executa sempre
*/