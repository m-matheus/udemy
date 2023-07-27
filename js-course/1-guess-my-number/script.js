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
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // When there are no numbers in the input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    // When the anwser is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    // When the number is greater than the answer
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!';
    }
    // When the number is smaller than the answer
    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!';
    }
    // When the number is wrong, anycase
    if (guess != secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.message').textContent =
                '💥 You lost the game';
        }
    } else {
        document.querySelector('.highscore').textContent = score;
    }


});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.round(Math.random() * 20);
    console.log(secretNumber);

});

