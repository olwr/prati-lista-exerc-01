import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 7: Valor de Compra.');
  console.log('O seguinte código recebe a quantidade de compra de maças e ajusta o preço por dúzia. \n');
}

const getQuantity = () => {
  let inputQuant = prompt('Digite a quantidade de maças compradas: ');
  console.log('\n');

  while(isNaN(inputQuant) || inputQuant < 1 ) {
    console.log('Valor inválido!')
    inputQuant = prompt('Digite a quantidade de maças compradas: ');
    console.log('\n');
  }

  const quantity = parseInt(inputQuant);
  return quantity;
}

const calculatesAppleValue = () => {
  welcome();

  const applesQuant = getQuantity();
  let price, total;

  if (applesQuant < 12) {
    price = 0.30;
  } else {
    price = 0.25;
  }

  total = price * applesQuant;

  console.log(`O valor total da sua compra é de: R\$${total.toFixed(2)}`);
}

export default calculatesAppleValue;