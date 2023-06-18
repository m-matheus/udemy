const paragrafos = document.querySelector('.paragrafos'); // selecionei a div pai dos ps
const ps = paragrafos.querySelectorAll('p'); // selecionei todos ps

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor; // peguei a cor do fundo

for (let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

