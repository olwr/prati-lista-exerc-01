import { select, input } from "@inquirer/prompts";

const welcome = () => {
  console.log('Exercício 4: Menu com Switch Case.');
  console.log('O seguinte código apresenta um sistema bancário simples. \n');
}
let funds = 0;

const validates = async (value) => {
  value = value.replace(',', '.');

  while (isNaN(value) || value < 1) {
    console.log('Valor inválido! Por favor, insira um valor numérico positivo maior que 0')
    value = await input({ message: 'Digite o valor que deseja depositar: ' });
    value = value.replace(',', '.');
    console.log('\n');
  }

  let toDeposit = parseFloat(value)
  return toDeposit;
}

const deposit = async () => {
  let value = await input({ message: 'Digite o valor que deseja depositar: ' });
  value = await validates(value);

  funds += parseFloat(value);
}

const consult = async () => {
  console.log(`O balanço atual da sua conta é de: R\$${funds.toFixed(2)}`);
}

const withdraw = async () => {
  let value = await input({ message: 'Digite o valor que deseja retirar: ' });
  value = await validates(value);

  if (funds - value < 0) {
    console.log('Operação inválida! Você está tentando sacar um valor maior do que tem em conta, por favor consulte seu balanço antes de retirar dinheiro da conta.');
    return;
  }

  funds -= parseFloat(value);
}

const bank = async () => {
  welcome();

  while (true) {
    const option = await select({
      message: 'Menu >',
      choices: [
        {
          name: 'Depositar',
          value: 'deposit'
        },
        {
          name: 'Consultar',
          value: 'consult'
        },
        {
          name: 'Retirar',
          value: 'withdraw'
        },
        {
          name: 'Sair',
          value: 'exit'
        },
      ]
    });

    switch (option) {
      case 'deposit':
        await deposit();
        break;
      case 'consult':
        await consult();
        break;
      case 'withdraw':
        await withdraw();
        break;
      case 'exit':
        console.log('Até mais!');
        return;
    }
  }
}

export default bank;