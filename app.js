const button = [...document.querySelectorAll('[data-button]')];

let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');

let arrAnswer = question1.arrAnswer;

let index = 0;

button[0].addEventListener('click', startGame);
// button[1].addEventListener('click', aboutGame);

function startGame () {
    button[0].removeEventListener('click', startGame);

    outStatus.innerText = 'Вопрос ' + ++index ;
    outQuestion.innerText = question1.question;

    for (let i = 0; i < button.length; i++) {
        button[i].innerText = arrAnswer[i];
        button[i].addEventListener('click', checkedAnswer);
    }
}

function checkedAnswer () {
    let x = this.innerText;
    if (x === question1.trueAnswer) {
        outStatus.innerText = 'Ответ правильный!';
    } else {
        outStatus.innerText = 'Ответ не правильный!';
    }
}





