'use strict';

const mysteryNumber = Math.round(Math.random()*100);
console.log(mysteryNumber)

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
}

const one = function () {
    let count = 10;
    const two = function () {
        let number = prompt('Угадай число от 1 до 100');
        count--;
        if (number == mysteryNumber) {
            const oneMore = confirm('Поздравляю, вы угадали! Хотите сыграть еще?');
            if (oneMore) {
                one();
            } else {
                console.log('Игра окончена')
            }
        } else if (count < 1) {
            const oneMore = confirm('Попытки закончились. Хотите сыграть еще?');
            if (oneMore) {
                one();
            } else {
                return
            }
        } else if (number === null) {
            alert('Игра окончена.');
        } else if (!isNumber(number)) {
            alert('Введи число! Осталось попыток: ' + count);
            two();
        } else if (number < mysteryNumber) {
            alert('Загаданное число больше, осталось попыток: ' + count);
            two();
        } else if (number > mysteryNumber) {
            alert('Загаданное число меньше, осталось попыток: ' + count);
            two();
        }
    }
    two();
}

one();

