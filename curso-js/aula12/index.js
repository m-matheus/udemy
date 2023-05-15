let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

// desafio: fazer A = B, B = C, C = A. Sem redeclarar as variaveis.

let varAux;
varAux = varA; // A
varA = varB; // A - B
varB = varC; // B - C
varC = varAux;

console.log(varA, varB, varC);

// usando arrays

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);