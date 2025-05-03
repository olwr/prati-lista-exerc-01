import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 12: Printa Tabuada.');
  console.log('O seguinte código recebe um número e print sua tabuada até 10. \n');
}

const fibonacci = () => {
  const fibonacci = [0, 1];

  for (let i = 2; i <= 9; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log(`Os primeiros 10 números da sequência de Fibonacci são: ${fibonacci.join(', ')}`);
}

export default fibonacci;