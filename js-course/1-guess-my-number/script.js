'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 
// .textContent = pegar o conteudo texto de dentro do elemento

document.querySelector('.guess').value = 10; 
// para inputs onde não tem conteudo de texto, mas sim uma valor "vazio" 
*/

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // When there are no numbers in the input
    if (!guess) {
        displayMessage('⛔ No number!');
    }
    // When the anwser is correct
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
    // When the number is wrong, anycase
    if (guess != secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (score > 1) {
            displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
        }
        if (score <= 0) {
            displayMessage('💥 You lost the game! Please try Again.');
            document.querySelector('body').style.backgroundColor = '#ca7979';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.round(Math.random() * 20);
    score = 20;
    console.log(secretNumber);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
