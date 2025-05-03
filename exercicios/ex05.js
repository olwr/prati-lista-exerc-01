import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 5: IMC.');
  console.log('O seguinte código recebe peso e altura, calcula o IMC e classifica. \n');
}

const getInput = (message) => {
  let inputValue = prompt(message).replace(',', '.');
  console.log('\n');

  while(isNaN(inputValue) || inputValue < 0 ) {
    console.log('Valor inválido!')
    inputValue = prompt(message).replace(',', '.');
    console.log('\n');
  }

  const number = parseFloat(inputValue);
  return number;
}

const calculatesIMC = () => {
  welcome();

  const weight = getInput('Digite o seu peso em Kg: ');
  const height = getInput('Digite sua altura em metros: ');

  const imc = (weight / (height**2));
  const fixedIMC = parseFloat(imc.toFixed(2));

  return fixedIMC;
}

const classifyIMC = () => {
  const imc = calculatesIMC();

  if (imc < 18.49) {
    console.log(`O IMC ${imc} indica peso baixo`);
  } else if (imc >= 18.50 && imc < 24.99) {
    console.log(`O IMC ${imc} indica peso adequado`);
  } else if (imc >= 25 && imc < 29.99) {
    console.log(`O IMC ${imc} indica sobrepeso`);
  } else {
    console.log(`O IMC ${imc} indica obesidade`);
  }
}

export default classifyIMC;