const mainBlock = document.querySelector('.wrapper');
const imgPerson = document.querySelectorAll('.img');
const iconPerson = document.querySelectorAll('.icon');
const outPerson = document.querySelector('.out_image_person');
const buttonControlBlock = document.querySelector('.button_control');
const blockPerson = document.querySelector('.out_image_block');
const hiddenButton = document.querySelectorAll('.hidden_button');

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let item = 0;
let userPerson;

leftButton.addEventListener('click', function () {
    if(item !== 0) {
        outPerson.append(img);
        item -= 1;
        createIcon();

    };
});

rightButton.addEventListener('click', function () {
    if(item !== 4) {
        outPerson.append(img);
        item += 1;
        createIcon();
    };
});
console.log(item);
let img = document.createElement('img');
let image = document.createElement('img');

function personStart () {
    button[2].classList.remove('active');

    for(let i = 0; i < hiddenButton.length; i++) {
        hiddenButton[i].classList.add('hidden');
    }
    buttonControlBlock.classList.remove('button_control');
    buttonControlBlock.classList.add('btn_control');

    button[0].innerText = 'Сохранить';
    button[2].innerText = 'Выход';


    button[0].onclick = saveSettings;
    button[2].onclick = gameOver;

    scaleBlock.style = 'display: none';
    mainBlock.style = 'display: none';
    blockPerson.style = 'visibility: visible';

    createIcon ();
}

function createIcon () {
    img.src = iconPerson[item].alt;
    img.height = 300;
    img.classList.add('box_icon');

    outPerson.append(img);
}
function saveSettings () {
    image.src = imgSource[item];
    image.height = 400;
    image.classList.add('width_person')

    userPerson = image;
    gameOver();
}
