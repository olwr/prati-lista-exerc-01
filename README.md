# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /> Lista de Exercícios 01: Estruturas Básicas  

###### [+PraTi & Codifica Edu]

Este projeto é a entrega da lista de exercícios 01 do curso Dev. Full Stack Jr. (+PraTi & Codifica), feito em JavaScript com Node.js. Os exercícios são nomeados com o padrão `ex[nº].js`, sendo nº o número do exercício — que vai de 01 até 15.

Exemplo: `ex03.js`;

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Memo" width="25" height="25" /> Pré-Requisitos

Para rodar este projeto na sua máquina é necessário fazer a instalação do [Node.js](https://nodejs.org/en). O pacote npm será usado para instalar dependências e rodar scripts de build e execução do projeto, então é necessário usar um terminal com permissão para rodar scripts.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Floppy%20Disk.png" alt="Floppy Disk" width="25" height="25" /> Instalação

1. Clone ou baixe este repositório:

```bash
cd sua-pasta
git clone https://github.com/olwr/prati-lista-exerc-01.git
```

2. Execute o script para baixar as dependências necessárias:

```sh
cd prati-lista-exerc-01
npm run build
```

Este comando irá instalar o `inquirer` e o `prompt-sync`, ambos pacotes necessários para possibilitar a entrada de dados via cli (linha de comando).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Optical%20Disk.png" alt="Optical Disk" width="25" height="25" /> Execução

Execute o script `start` para ter acesso a um menu com a lista de todos os exercícios:

```sh
npm run start
```

Para navegar no console, basta usar as setas ↑ (arrow up | seta para cima), ↓ (arrow down | seta para baixo) e enter para selecionar uma opção ou confirmar uma entrada de dados. É só escolher o exercício que deseja executar. Para encerar a execução, é só selecionar a opção de `Sair`.

É possível também executar o arquivo diretamente, basta usar o comando:

```node
node main.js
```

Porém, o mesmo não irá funcionar para os outros arquivos, porquê as chamadas de suas funções estão somente no `menu.js` que, por sua vez, só é chamado dentro do `main.js`.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Card%20File%20Box.png" alt="Card File Box" width="25" height="25" /> Estrutura do Projeto

```
/
├── exercicios
|   ├── ex01.js
|   ├── ex02.js
|   ├── ex03.js
|   ├── ...
|   ├── menu.js
├── main.js
├── package.json
└── README.md
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Double%20Exclamation%20Mark.png" alt="Double Exclamation Mark" width="25" height="25" /> Importante

**Certifica-se de estar no diretório certo antes da execução de qualquer comando.**

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pushpin.png" alt="Pushpin" width="25" height="25" /> Lista:

1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

- Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

    - Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    - Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    - Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
