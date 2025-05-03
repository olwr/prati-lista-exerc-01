import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 1: Classificação de Números.');
  console.log('O seguinte código verifica se o número digitado é par ou impar. \n');
}

const getNumber = () => {
  let inputedNumber = prompt('Digite um número: ');
  console.log('\n');

  while(isNaN(inputedNumber)) {
    console.log('Valor inválido! Por favor, preencha com um valor numérico válido.')
    inputedNumber = prompt('Digite um número: ');
    console.log('\n');
  }

  const number = parseInt(inputedNumber);
  return number;
}

const verifyNumberClassification = () => {
  welcome();
  const number = getNumber();

  number % 2 === 0 ? console.log(`O número ${number} é par`) : console.log(`O número ${number} é ímpar`);
}

export default verifyNumberClassification;