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

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// Nome e sobrenome inseridos pelo usuário
var nome = "João";
var sobrenome = "Silva";

// Juntando os nomes com a mensagem de boas-vindas
  
       //seu código

// Exibindo a mensagem no console
console.log();


//-------------------------------------------------------------------------------------------------


//Desafio 3

// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Idade do funcionário em anos
var idadeEmAnos = 30;

// Calculando anos em dias
  
      //seu código


// Exibindo o resultado no console
console.log("O funcionário viveu aproximadamente... dias");

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
