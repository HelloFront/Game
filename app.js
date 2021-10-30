const button = [...document.querySelectorAll('[data-button]')];
const buttonContinue = document.querySelector('[data-continue]');
const buttonExit = document.querySelector('[data-exit]');
const buttonLose = document.querySelector('[data-lose]');

let body = document.querySelector('.body');
let winWindow = document.querySelector('[data-win]');
let loseWindow = document.querySelector('[data-lose]');

let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');
let outBalanceWin = document.querySelector('.out__money__win');
let outBalanceLose = document.querySelector('.out__money__lose');

let balance = 0;
let index = 5;

button[0].addEventListener('click', startGame);
// button[1].addEventListener('click', aboutGame);

function startGame () {
    button[0].removeEventListener('click', startGame);
    let arrAnswer = question[index].arrAnswer;

    outStatus.innerText = 'Вопрос ' + (index+1) ;
    outQuestion.innerText = question[index].question;

    for (let i = 0; i < button.length; i++) {
        button[i].innerText = arrAnswer[i];
        button[i].addEventListener('click', checkedAnswer);
    }
}

function checkedAnswer () {
    let x = this.innerText;
    if (x === question[index].trueAnswer) {
        winWindow.style = 'display: block';
        body.style = 'opacity: .2'
        
        balance = countBalance();
        outBalanceWin.innerText = `Вы выиграли ${balance}$`;

        index++

        buttonContinue.addEventListener('click', function () {
            winWindow.style = 'display: none';
            body.style = 'opacity: 1';

            startGame();
        });

        buttonExit.addEventListener('click', function () {
            winWindow.style = 'display: none';
            body.style = 'opacity: 1';

            gameOver();
        });

    } else {
        if(index >= 4 && index < 9) {
            outBalanceLose.innerText = 'Вы выиграли 1000$';
        } else if(index >= 9 && index < 14) {
            outBalanceLose.innerText = 'Вы выиграли 32000$';
        } else {
            outBalanceLose.innerText = 'Вы ничего не выиграли';
        }

        loseWindow.style = 'display: block';
        body.style = 'opacity: .2'
        
        buttonLose.addEventListener('click', function () {
            loseWindow.style = 'display: none';
            body.style = 'opacity: 1';

            gameOver();
        });
    }
}

function gameOver () {
    outStatus.innerText = 'Главное меню';
    outQuestion.innerText = infoGame;

    for (let i = 0; i < button.length; i++) {
        button[i].removeEventListener('click', checkedAnswer);
    }
    button[0].addEventListener('click', startGame);

    for (let i = 0; i < button.length; i++) {
        button[i].innerText = arrControl[i];
    }

    index = 0;
}

function countBalance () {

    if(index < 3) {
        balance += 100;
    } else if (index === 3) {
        balance += 200;
    } else if (index > 3 && index < 11) {
        balance *= 2;
    } else if (index === 11) {
        balance = 125000;
    } else if (index > 11 && index <= 14){
        balance *= 2;
    }

    return balance;
}