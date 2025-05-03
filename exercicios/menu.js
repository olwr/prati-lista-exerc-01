import { select } from "@inquirer/prompts";
import verifyNumberClassification from "./ex01.js";
import classifyAge from "./ex02.js";
import classifyGrade from "./ex03.js";
import bank from "./ex04.js";
import classifyIMC from "./ex05.js";
import classifyTriangle from "./ex06.js";
import calculatesAppleValue from "./ex07.js";
import orderNumbers from "./ex08.js";
import count from "./ex09.js";
import getNumber from "./ex10.js";
import sum from "./ex11.js";
import printMultiplicationTable from "./ex12.js";
import getAverage from "./ex13.js";
import returnsFactorial from "./ex14.js";
import fibonacci from "./ex15.js";

const menu = async () => {
  while(true) {
    const option = await select({
      message: 'Menu >',
      choices: [
        {
          name: 'Exercício 1',
          value: 1
        },
        {
          name: 'Exercício 2',
          value: 2
        },
        {
          name: 'Exercício 3',
          value: 3
        },
        {
          name: 'Exercício 4',
          value: 4
        },
        {
          name: 'Exercício 5',
          value: 5
        },
        {
          name: 'Exercício 6',
          value: 6
        },
        {
          name: 'Exercício 7',
          value: 7
        },
        {
          name: 'Exercício 8',
          value: 8
        },
        {
          name: 'Exercício 9',
          value: 9
        },
        {
          name: 'Exercício 10',
          value: 10
        },
        {
          name: 'Exercício 11',
          value: 11
        },
        {
          name: 'Exercício 12',
          value: 12
        },
        {
          name: 'Exercício 13',
          value: 13
        },
        {
          name: 'Exercício 14',
          value: 14
        },
        {
          name: 'Exercício 15',
          value: 15
        },
        {
          name: 'Sair',
          value: 0
        },
      ]
    });

    switch (option) {
      case 1:
        verifyNumberClassification();
        break;
      case 2:
        classifyAge();
        break;
      case 3:
        classifyGrade();
        break;
      case 4:
        await bank();
        break;
      case 5:
        classifyIMC();
        break;
      case 6:
        classifyTriangle();
        break;
      case 7:
        calculatesAppleValue();
        break;
      case 8:
        orderNumbers();
        break;
      case 9:
        count();
        break;
      case 10:
        getNumber();
        break;
      case 11:
        sum();
        break;
      case 12:
        printMultiplicationTable();
        break;
      case 13:
        getAverage();
        break;
      case 14:
        returnsFactorial();
        break;
      case 15:
        fibonacci();
        break;
      case 0:
        console.log('Até mais!');
        return;
  }
}
}

export default menu;