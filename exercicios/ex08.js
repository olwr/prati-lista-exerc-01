import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 8: Ordena valores.');
  console.log('O seguinte código recebe 2 valores numéricos diferentes e os ordena de forma crescente. \n');
}

const getNumber = (message) => {
  let number = prompt(message).replace(',', '.');
  console.log('\n');

  while(isNaN(number)) {
    console.log('Valor inválido!')
    number = prompt(message).replace(',', '.');
    console.log('\n');
  }

  return number;
}

const orderNumbers = () => {
  welcome();

  const number1 = getNumber('Digite o valor do primeiro número: ');
  const number2 = getNumber('Digite o valor do segundo número: ');

  const numbers = [number1, number2];

  console.log(numbers.sort());
}

export default orderNumbers;