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
// Duração total do evento em minutos
// Calculando horas e minutos
  
var duracaoEmMinutos = readlineSync.question(chalk.bgRed.bold(' Quantos minutos durou o evento ? '));

var horasConvertidas = Math.floor(duracaoEmMinutos / 60);
var minutosConvertidos = duracaoEmMinutos % 60;

console.log(chalk.white.bgGreen.bold(` O evento durou ${horasConvertidas} horas e ${minutosConvertidos} minutos. `));
