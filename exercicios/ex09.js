import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 9: Contagem Regressiva.');
  console.log('O seguinte código exibe uma contagem regressiva de 10 até 1. \n');
}

const count = () => {
  welcome();

  for (let i = 10; i > 0; i--) {
    console.log(`Contagem: ${i}`);
  }
}

export default count;