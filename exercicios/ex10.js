import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 10: Repete Número.');
  console.log('O seguinte código recebe um número e o repete 10 no console. \n');
}

const getNumber = () => {
  let number = prompt('Digite o número desejado: ').replace(',', '.');
  console.log('\n');

  while(isNaN(number)) {
    console.log('Valor inválido!')
    number = prompt('Digite o número desejado: ').replace(',', '.');
    console.log('\n');
  }

  return number;
}

const loopNumber = () => {
  welcome();

  const number = getNumber();

  for (let i = 0; i < 10; i++) {
    console.log(number);
  }
}

export default loopNumber;