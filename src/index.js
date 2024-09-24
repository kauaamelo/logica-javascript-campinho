import chalk from 'chalk';
import readlineSync from 'readline-sync';

// Desafio 1
// Dimensões da parede (largura e altura em metros)

var largura = readlineSync.question(chalk.bgRed.bold(' Qual e a largura da parede? '));
var altura = readlineSync.question(chalk.bgRed.bold(' Qual e a altura da parede? '));

var resultado = parseFloat;
resultado = largura * altura;

console.log(chalk.white.bgGreen.bold(` A area da parede e: ${resultado}`));

//-------------------------------------------------------------------------------------------------

// Desafio 2
// Nome e sobrenome inseridos pelo usuário

var nome = readlineSync.question(chalk.bgRed.bold(' Qual e o seu primeiro nome ? '));
var sobrenome = readlineSync.question(chalk.bgRed.bold(' Qual e o seu sobrenome ? '));

console.log(chalk.white.bgGreen.bold(` Ola ${nome} ${sobrenome}. Bem vindo ao nosso sistema! `));

//-------------------------------------------------------------------------------------------------

//Desafio 3
// Idade do funcionário em anos
  
var idadeAtual = readlineSync.question(chalk.bgRed.bold(' Qual e sua idade atual ? '));
var diasEmAnos = 365

var diasConvertidos = idadeAtual * diasEmAnos;

console.log(chalk.white.bgGreen.bold(` Voce possui ${diasConvertidos} dias de vida. `));

//-------------------------------------------------------------------------------------------------

// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// Duração total do evento em minutos
var duracaoEmMinutos = 135;

// Calculando horas e minutos
  
      //seu código


// Exibindo o resultado no console
console.log("O evento durou ...horas e ... minutos.");
