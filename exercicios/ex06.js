import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 6: Classificação de Triângulos.');
  console.log('O seguinte código recebe os 3 lados de um triângulo e o classifica. \n');
}

const getTriangleSide = (message) => {
  let inputValue = prompt(message).replace(',', '.');
  console.log('\n');

  while(isNaN(inputValue) || inputValue < 0 ) {
    console.log('Valor inválido!')
    inputValue = prompt(message).replace(',', '.');
    console.log('\n');
  }

  const side = parseFloat(inputValue);
  return side;
}

const classifyTriangle = () => {
  welcome();

  const sideA = getTriangleSide('Digite o valor do lado A do triângulo (em CM): ');
  const sideB = getTriangleSide('Digite o valor do lado B do triângulo (em CM): ');
  const sideC = getTriangleSide('Digite o valor do lado C do triângulo (em CM): ');

  if (sideA === sideB && sideB === sideC) {
    console.log('O triângulo com todos os lados iguais é classificado como Equilátero');
  } else if (sideA !== sideB && sideB !== sideC) {
    console.log('O triângulo com todos os lados diferentes é classificado como Escaleno');
  } else {
    console.log('O triângulo com 2 lados iguais é classificado como Isósceles');
  }
}

export default classifyTriangle;