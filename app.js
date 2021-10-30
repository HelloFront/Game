const button = [...document.querySelectorAll('[data-button]')];
const buttonContinue = document.querySelector('[data-continue]');
const buttonExit = document.querySelector('[data-exit]');

let body = document.querySelector('.body');
let win = document.querySelector('[data-win]');
let lose = document.querySelector('[data-lose]');
let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');

let balance = 0;
let index = 0;


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
        win.style = 'display: block';
        body.style = 'opacity: .3'
        
        index++

        buttonContinue.addEventListener('click', function () {
            win.style = 'display: none';
            body.style = 'opacity: 1';

            startGame();
        });
    } else {
        outQuestion.innerText = `Вы проиграли!`
        outStatus.innerText = 'Ответ не правильный!';
        setTimeout(gameOver, 800)
    }
}

function gameOver () {
    outStatus.innerText = 'Главное меню';
    outQuestion.innerText = infoGame;
    button[0].removeEventListener('click', checkedAnswer);
    button[0].addEventListener('click', startGame);

    for (let i = 0; i < button.length; i++) {
        button[i].innerText = arrControl[i];
    }
}