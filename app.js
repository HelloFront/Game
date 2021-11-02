const button = [...document.querySelectorAll('[data-button]')];
const arrScaleItem = [...document.querySelectorAll('pre')]
const buttonContinue = document.querySelector('[data-continue]');
const buttonExit = document.querySelector('[data-exit]');
const buttonLose = document.querySelector('[data-lose]');

arrScaleItem.reverse();

buttonContinue.addEventListener('click', btnContinue);
buttonExit.addEventListener('click', btnExit);
buttonLose.addEventListener('click', btnLose);

let body = document.querySelector('.body');
let winWindow = document.querySelector('[data-win]');
let loseWindow = document.querySelector('[data-lose]');

let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');
let outBalanceWin = document.querySelector('.out__money__win');
let outBalanceLose = document.querySelector('.out__money__lose');
let yourBalanse = document.querySelector('.score__cash');
let yourInformation = document.querySelector('.window__score');

let balance = 0;
let index = 0;

checkedButton();
let ask = [...getRandomArr(question)];

function startGame () {

    yourInformation.style = "display: block";

    let arrAnswer = ask[index].arrAnswer;

    for (let i = 0; i < button.length; i++) {
        if (isTouchDevice()) {
            button[i].classList.remove('active');
        } else {
            button[i].classList.add('active');
        }
        
        button[i].innerText = arrAnswer[i];
        button[i].addEventListener('click', checkedAnswer);
    }

    outStatus.innerText = ask[index].question;
    outQuestion.innerText ='Вопрос ' + (index+1) ;
}

function checkedAnswer () {
    removeStyle();

    let x = this.innerText;
    if (x === ask[index].trueAnswer) {
        
        
        

        winWindow.style = 'display: block';
        body.style = 'opacity: .2'
        
        balance = countBalance();
        yourBalanse.innerText = balance + '$';
        
        if (index === 14) {
            outBalanceWin.innerText = `Вы победитель и обладатель ${balance}$ Congratulations!`;
        } else {
            outBalanceWin.innerText = `Вы выиграли ${balance}$`;
        }
        for(let i = 0; i < arrScaleItem.length; i++) {
            arrScaleItem[i].classList.remove('x');
            arrScaleItem[index].classList.add('x');
        }

        index++

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
    }
}

//----------------------- Function -----------------------------------

function gameOver () {
    outStatus.innerText = 'Главное меню';
    outQuestion.innerText = infoGame;

    for (let i = 0; i < button.length; i++) {
        button[i].removeEventListener('click', checkedAnswer);
        button[i].innerText = arrControl[i];
        button[i].classList.remove('active')
    }
    
    index = 0;
    balance = 0;
    ask = [...getRandomArr(question)];

    for(let i = 0; i < arrScaleItem.length; i++) {
        arrScaleItem[i].classList.remove('x')
    }
    yourBalanse.innerText = balance +'$';
    yourInformation.style = "display: none";
}

function countBalance () {
    if(index < 4) {
        balance += 100;
    } else if (index === 4) {
        balance += 200;
    } else if (index > 4 && index < 12) {
        balance *= 2;
    } else if (index === 12) {
        balance = 125000;
    } else if (index > 12 && index <= 15){
        balance *= 2;
    }

    return balance;
}

function checkedButton () {
    for (let i = 0; i < button.length; i++) {
        if(typeof(button[i].onclick) === 'function') {
            button[i].addEventListener('mouseover', function () {
                button[i].classList.add('active');
                button[i].addEventListener('mouseout', function () {
                    button[i].classList.remove('active');
                })
            })
        }
    }
}

function getRandomArr (arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function removeStyle () {
    for (let i = 0; i < button.length; i++) {
        button[i].classList.add('active');
    }
}
function btnContinue () {
    winWindow.style = 'display: none';
    body.style = 'opacity: 1';

    setTimeout(startGame, 100);
}
function btnExit () {
    winWindow.style = 'display: none';
    body.style = 'opacity: 1';

    setTimeout(gameOver, 100);
}
function btnLose () {
    loseWindow.style = 'display: none';
    body.style = 'opacity: 1';

    setTimeout(gameOver, 100);
}
function isTouchDevice() {
    try {
      document.createEvent('TouchEvent');
      return true;
    }
    catch(e) {
      return false;
    }
  }
