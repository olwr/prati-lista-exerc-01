import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 12: Printa Tabuada.');
  console.log('O seguinte código recebe um número e print sua tabuada até 10. \n');
}

const getNumber = () => {
  let inputValue = prompt('Digite o número desejado: ');
  console.log('\n');

  while(isNaN(inputValue)) {
    console.log('Valor inválido!')
    inputValue = prompt('Digite o número desejado: ');
    console.log('\n');
  }

  const number = parseInt(inputValue);
  return number;
}

const printMultiplicationTable = () => {
  welcome();

  let number = getNumber();
  let result = 0;
  for (let i = 1; i < 11; i++) {
    result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}

export default printMultiplicationTable;
