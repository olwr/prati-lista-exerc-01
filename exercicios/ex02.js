import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 2: Classificação de Idades.');
  console.log('O seguinte código classifica a idade de uma pessoa em categorias. \n');
}

const getAge = () => {
  let age = prompt('Digite a idade: ');
  console.log('\n');

  while(isNaN(age) || age < 0) {
    console.log('Valor inválido! Por favor, preencha com uma idade válida.')
    age = prompt('Digite a idade: ');
    console.log('\n');
  }

  return age;
}

const classifyAge = () => {
  welcome();

  const age = getAge();

  if (age < 12) {
    console.log(`A idade ${age} pertence a categoria: Criança`)
  } else if (age >= 12 && age < 18) {
    console.log(`A idade ${age} pertence a categoria: Adolescente`)
  } else if (age >= 18 && age < 60) {
    console.log(`A idade ${age} pertence a categoria: Adulto`)
  } else {
    console.log(`A idade ${age} pertence a categoria: Idoso`)
  }
}

export default classifyAge;