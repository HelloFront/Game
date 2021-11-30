const mainBlock = document.querySelector('.wrapper');
const imgPerson = document.querySelectorAll('.img');
const iconPerson = document.querySelectorAll('.icon');
const outPerson = document.querySelector('.out_image_person');
const buttonControlBlock = document.querySelector('.button_control');
const blockPerson = document.querySelector('.main_block_person');
const hiddenButton = document.querySelectorAll('.hidden_button');
const buttonPerson = document.querySelectorAll('.control_person')
const inputName = document.querySelector('.name_person > input');
const outNamePerson = document.querySelector('.out_name');

const leftButton = document.querySelector('.left > svg');
const rightButton = document.querySelector('.right > svg');

let item = 0;
let userPerson;
let userName;

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

let img = document.createElement('img');
let image = document.createElement('img');

function personStart () {
    if(userName !== undefined) {
        inputName.value = userName;
    }
    
    if (!isTouchDevice()) {
        for (let i of buttonPerson) {
            i.classList.add('active')
        }
    }
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
    blockPerson.style = 'display: block';

    createIcon ();
}

function createIcon () {
    img.src = iconPerson[item].alt;
    img.height = 200;
    img.classList.add('box_icon');

    outPerson.append(img);
}
function saveSettings () {
    image.src = imgSource[item];
    image.height = 400;
    image.classList.add('width_person')

    userPerson = image;
    userName = inputName.value;

    if(userName !== '') {
        outNamePerson.innerText += userName;
        outNamePerson.style.visibility = 'visible';
    } else outNamePerson.style.visibility = 'hidden';
    gameOver();
}
