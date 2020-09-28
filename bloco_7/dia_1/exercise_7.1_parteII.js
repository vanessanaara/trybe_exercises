// 1.Crie uma função que receba um número e retorne seu fatorial
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }
  console.log(result);
}

factorial(5);

// 2.Crie uma função que receba uma frase e retorne qual a maior palavra
const longestWord = phrase => {
  let wordArray = phrase.split(' ');
  let totalLetters = 0;
  let result = '';

  for (let index of wordArray) {
    if (index.length > totalLetters) {
      totalLetters = index.length;
      result = index;
    }
  }
  console.log(result);
}

longestWord('Antonio foi no banheiro e não sabemos o que aconteceu');