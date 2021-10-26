const question1 = createQuestion('Какой язык является мультипарадигменным?',
    ' C++', ' JavaScript', ' Python', ' Java', ' JavaScript' );

// let question1 = createQuestion('Какой язык является мультипарадигменным?',
//     'a) C++\nb) JavaScript\nc) Python\nd) Java','b' );
// let question2 = createQuestion('Как называется разработчик которий работает над клиентской стороной проекта?',
//     'a) BackEnd Dev\nb) Mobile Dev\nc) QA Engineer\nd) FrontEnd Dev','d' );
// let question3 = createQuestion('С помощью какой команды можно остановить цикл for?',
//     'a) break\nb) return\nc) stop\nd) exit','a' );
// let question4 = createQuestion('Что из представленных вариантов является тэгом разметки?',
//     'a) p\nb) this\nc) do\nd) const','a');
// let question5 = createQuestion('Какой будет результат?\nconsole.log(typeof(\'Hello World!\'));?',
//     'a) undefined\nb) null\nc) \'string\'\nd) text','c');
// let question6 = createQuestion('Каким оператором можна перевести любой тип данных в тип Boolean?',
//     'a) ?\nb) !!\nc) >>>\nd) ~','b');
// let question7 = createQuestion('Какой вариант является элементом синтаксиса стрелочной функиции?',
//     'a) >=\nb) =>\nc) <=\nd) >','b');
// let question8 = createQuestion('Какой метод работы с массивами добавляет елемент в конец массива?',
//     'a) unshift\nb) splice\nc) split\nd) push','d');
// let question9 = createQuestion('С помощью какой директивы включается строгий режим?',
//     'a) \'use strict\'\nb) \'strong\'\nc) \'strict\'\nd) \'global\'','a');
// let question10 = createQuestion('Какая технология используется для оформления стилей на странице?',
//     'a)NodeJs\nb)HTML\nc)JavaScript\nd)CSS','d');
// let question11 = createQuestion('Какая технология позволяет JavaScript работать на сервере?',
//     'a)TypeScript\nb)React\nc)NodeJs\nd)Angular','c');
// let question12 = createQuestion('Какой будет результат\nconsole.log(null || 1 || undefined || 2);?',
//     'a) null\nb) NaN\nc) 1\nd) undefined','c');
// let question13 = createQuestion('У какого оператора самый высокий приоритет?',
//     'a) ( )\nb) *\nc) ++\nd) *=','a');
// let question14 = createQuestion('В какой части HTML файла подключается внешний файл стилей CSS?',
//     'a) body\nb) footer\nc) head\nd) DOCTYPE','c');
// let question15 = createQuestion('Какая функция выводит информацию на экран в модальном окне?',
//     'a) isNaN( )\nb) console.log( )\nc) isArray( )\nd) alert( )','d');

// const question = [question1, question2, question3, question4, question5, question6, question7,
//     question8, question9, question10, question11, question12, question13, question14, question15];

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