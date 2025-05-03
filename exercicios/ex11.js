import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 11: Soma Total.');
  console.log('O seguinte código recebe 5 números e calcula a soma total via loop for. \n');
}

const getNumber = (message) => {
  let inputValue = prompt(message).replace(',', '.');
  console.log('\n');

  while(isNaN(inputValue)) {
    console.log('Valor inválido!')
    inputValue = prompt(message).replace(',', '.');
    console.log('\n');
  }

  const number = parseFloat(inputValue);
  return number;
}

const sum = () => {
  welcome();

  let total = 0, number = 0;

  for (let i = 1; i < 6; i++) {
    number = getNumber(`Digite o número ${i} de 5 para a soma: `);
    total += number;
  }

  console.log(`O total da sua soma é: ${total}`);
}

export default sum;