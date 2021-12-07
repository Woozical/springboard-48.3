function guessingGame() {
  const target = Math.floor(Math.random() * 100);
  let hasWon = false;
  let guessCount = 0;
  return function(guess){
    if (hasWon) return "The game is over, you already won!";
    guessCount++;
    if (guess === target){
      hasWon = true;
      return `You win! You found ${target} in ${guessCount} guesses.`
    }
    return guess > target ? `${guess} is too high!` : `${guess} is too low!`;
  }
}

module.exports = { guessingGame };
