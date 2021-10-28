const button = [...document.querySelectorAll('[data-button]')];
let index = 0;

let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');

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
        outStatus.innerText = 'Ответ правильный!';
        index++
        startGame()
    } else {
        outStatus.innerText = 'Ответ не правильный!';
    }
}

