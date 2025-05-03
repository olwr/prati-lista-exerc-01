import PromptSync from "prompt-sync";
const prompt = PromptSync();

const welcome = () => {
  console.log('Exercício 3: Classificação de Notas.');
  console.log('O seguinte código classifica a nota do estudante em: aprovado, recuperação e reprovado. \n');
}

const getGrade = () => {
  let inputGrade = prompt('Digite a sua nota: ').replace(',', '.');
  console.log('\n');

  while(isNaN(inputGrade) || inputGrade < 0 || inputGrade > 10) {
    console.log('Valor inválido! Por favor, preencha com uma nota válida.')
    inputGrade = prompt('Digite a sua nota: ');
    console.log('\n');
  }

  const grade = parseFloat(inputGrade);
  return grade;
}

const classifyGrade = () => {
  welcome();

  const grade = getGrade();

  if (grade < 4) {
    console.log(`O aluno de nota ${grade} está: Reprovado`)
  } else if (grade >= 4 && grade < 6) {
    console.log(`O aluno de nota ${grade} está: em Recuperação`)
  } else if (grade >= 7 && grade <= 10) {
    console.log(`O aluno de nota ${grade} está: Aprovado`)
  }
}

export default classifyGrade;