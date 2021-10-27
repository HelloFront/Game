const button = [...document.querySelectorAll('.out')];

let outStatus = document.querySelector('.status');
let outQuestion = document.querySelector('.question');
let outAnswer = [...document.querySelectorAll('.outAnswer')];

let arrAnswer = question1.arrAnswer;

let index = 1;

button[0].addEventListener('click', startGame);
button[1].addEventListener('click', aboutGame);


function startGame () {
    outStatus.innerHTML = 'Вопрос ' + index;
    outQuestion.innerHTML = question1.question;

    for (let i = 0; i < arrAnswer.length; i++) {
        outAnswer[i].innerHTML = arrAnswer[i];
    }
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', checkedAnswer(outAnswer));
    }
}





