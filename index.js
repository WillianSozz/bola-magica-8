const userName = 'Willian';
userName ? console.log(`Olá, ${userName}!`) : console.log('Olá!');

const userQuestion = 'Vou arrumar um emprego na area que quero?';
userQuestion ? console.log(`Então sua pergunta é: ${userQuestion}`) : console.log('Faça uma pergunta a Magic Eight Ball');

let eightBall = '';

let randomNumber= Math.floor(Math.random() * 8);


switch(randomNumber) {
  case 0:
    eightBall = 'É certo';
    break;
  case 1:
    eightBall = 'É decididamente assim';
    break;
  case 2:
    eightBall = 'Estou confuso, tente novamente';
    break;
  case 3:
    eightBall = 'Não dá para prever agora';
    break;
  case 4:
    eightBall = 'Não conte com isso';
    break;
  case 5:
    eightBall = 'Minhas fontes dizem que não';
    break;
  case 6:
    eightBall = 'Perspectiva não tão boa';
    break;
  case 7:
    eightBall = 'Sinais apontam para sim';
    break;
}
console.log(`A Magic Eight Ball disse, ${eightBall}.`);
