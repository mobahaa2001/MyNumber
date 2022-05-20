('use strict');

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 3;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('❌ No Number');
    // When player wins
  } else if (guess === secretNum) {
    displayMessage('👏 Correct This is my Number❤❤😍');
    document.querySelector('.number').textContent = '✔';

    document.querySelector('body').style.backgroundColor = '#1597BB';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(
        guess > secretNum
          ? "❌ So bad that's really high🥵"
          : "❌ So bad that's really low🥶"
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('U lost the game😰');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#345B63';
      document.querySelector('.number').textContent = '❌';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 3;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#7b113a';
  document.querySelector('.number').style.width = '15rem';
});
