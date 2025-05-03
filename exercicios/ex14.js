import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 14: Retorna Fatorial.');
  console.log('O seguinte código recebe um número e calcula seu fatorial. \n');
}

const getNumber = () => {
  let inputValue = prompt('Digite um número inteiro: ');
  console.log('\n');

  while(isNaN(inputValue)) {
    console.log('Valor inválido!')
    inputValue = prompt('Digite um número inteiro: ');
    console.log('\n');
  }

  const number = parseInt(inputValue);
  return number;
}

const returnsFactorial = () => {
  welcome();

  let number = getNumber();
  let factorial = 1;

  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  console.log(`${number}! = ${factorial}`);
}

export default returnsFactorial;