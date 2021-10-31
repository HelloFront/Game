const arrControl = ['Играть', 'Об игре', 'Правила', 'Выход']
const infoGame = document.querySelector('.question').innerText;

const question1 = createQuestion('Сколько парадигм поддерживает JS ?',
' Одну', ' Две', ' Три', ' Четыре', 'Три' );
const question2 = createQuestion('Как называется разработчик которий работает над клиентской стороной проекта?',
    ' BackEnd Dev',' Mobile Dev',' QA Engineer',' FrontEnd Dev','FrontEnd Dev' );
const question3 = createQuestion('С помощью какой команды можно остановить цикл for?',
    ' break',' return',' stop',' exit','break' );
const question4 = createQuestion('Что из представленных вариантов является тэгом разметки?',
    ' p',' this',' do',' const','p');
const question5 = createQuestion('Какой будет результат:  console.log(typeof(\'Hello World!\'));?',
    ' undefined',' null',' \'string\'',' text','\'string\'');
const question6 = createQuestion('Каким оператором можно перевести любой тип данных в тип Boolean?',
    ' ?',' !!',' >>>',' ~','!!');
const question7 = createQuestion('Какой вариант является элементом синтаксиса стрелочной функиции?',
    ' >=',' =>',' <=',' >','=>');
const question8 = createQuestion('Какой метод работы с массивами добавляет елемент в конец массива?',
    ' unshift',' splice',' split',' push','push');
const question9 = createQuestion('С помощью какой директивы включается строгий режим?',
    ' \'use strict\'',' \'strong\'',' \'strict\'',' \'global\'','\'use strict\'');
const question10 = createQuestion('Какая технология используется для оформления стилей на странице?',
    ' NodeJs',' HTML',' JavaScript',' CSS','CSS');
const question11 = createQuestion('Какая технология позволяет JavaScript работать на сервере?',
    ' TypeScript',' React',' NodeJs',' Angular','NodeJs');
const question12 = createQuestion('Какой будет результат:  console.log(null || 1 || undefined || 2);?',
    ' null',' NaN',' 1',' undefined','1');
const question13 = createQuestion('У какого оператора самый высокий приоритет?',
    ' ( )',' *',' ++',' *=','( )');
const question14 = createQuestion('В какой части HTML файла подключается внешний файл стилей CSS?',
    ' body',' footer',' head',' DOCTYPE','head');
const question15 = createQuestion('Какая функция выводит информацию на экран в модальном окне?',
    ' isNaN( )',' console.log( )',' isArray( )',' alert( )','alert( )');

const question = [question1, question2, question3, question4, question5, question6, question7,
    question8, question9, question10, question11, question12, question13, question14, question15];

function createQuestion (question, answer1, answer2, answer3, answer4, trueAnswer) {
    return {
        question,
        arrAnswer: [
            answer1,
            answer2,
            answer3,
            answer4,
        ],
        trueAnswer
    }
}