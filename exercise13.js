function rockPaperScissor(choices) {
  const botChoices = ['rock', 'paper', 'scissor'];
  const computerChoices = botChoices[Math.floor(Math.random() * 3)];
  console.log('player pick: ' + choices);
  console.log('Computer pick: ' + computerChoices);

  if (choices === computerChoices) return 'Draw!!';
  if (
    (choices === 'rock' && computerChoices === 'scissor') ||
    (choices === 'scissor' && computerChoices === 'paper') ||
    (choices === 'paper' && computerChoices === 'rock')
  ) {
    return 'Win!!';
  } else {
    return 'Lose';
  }
}

console.log(rockPaperScissor('rock'));