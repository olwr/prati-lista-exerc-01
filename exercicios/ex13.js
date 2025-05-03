import PromptSync from "prompt-sync";
const prompt = PromptSync();
const average = [];

const welcome = () => {
  console.log('Exercício 13: Média Aritmética.');
  console.log('O seguinte código recebe números até o usuário digitar 0, depois printa a média aritmética destes números. \n');
}

const getNumber = () => {
  let inputValue = prompt('Digite o número desejado para somar ou 0 para encerrar: ').replace(',', '.');
  console.log('\n');

  while(isNaN(inputValue)) {
    console.log('Valor inválido!')
    inputValue = prompt('Digite o número desejado para somar ou 0 para encerrar: ').replace(',', '.');
    console.log('\n');
  }

  const number = parseFloat(inputValue);
  return number;
}

const getAverage = () => {
  welcome();

  let number = 0;

  while (true) {
    number = getNumber();

    if (number === 0) {
      return calculatesArithmeticMean();
    }

    average.push(number);
  }

}

const calculatesArithmeticMean = () => {
  let total = 0;
  for (let i = 0; i < average.length; i++) {
    total += average[i];
  }

  const averageSum = total / average.length;
  console.log(`A média aritmética é: ${averageSum}`);
}

export default getAverage;