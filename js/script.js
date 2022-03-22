let title;
let screens;
let screenPrice; 
let rollback = Math.random() * 50;
let adaptive; 
// let uTT = screens.split('')

let service1; 
let service2;

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}




const asking = function() {
    title = prompt("Как называется ваш проект?", "myProject");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");


    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while(!isNumber(screenPrice))
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
}


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return 'Даём скидку в 10%'
    } else if (15000 <= price && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (0 <= price && price < 15000){
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
};

const getAllServicePrices = function() {
    let sum = 0;
    let mEaning = 0;


    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

    do {
        mEaning = +prompt("Сколько будет стоить данная работа?");
    } while(!isNumber(mEaning))

    sum += mEaning;
    }
    return sum

};


const getFullPrice = function() {
    return screenPrice + allServicePrices;
};

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 

const  getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};


asking()
allServicePrices = getAllServicePrices();
fullPrice =  getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();
    


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log("allServicePrices", allServicePrices);



    
console.log(getRollbackMessage(fullPrice));
console.log (typeof title);
console.log (typeof adaptive);
console.log (typeof screenPrice);


// console.log ('title' + ' ' + title);
// console.log ('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей');
// console.log ('adaptive' + ' ' + adaptive);
// console.log ('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей');
// console.log (screens.length);
// console.log (screens.toLowerCase().split(', '));


// console.log ('Процент отката посреднику за работу' + ' ' + Math.round(fullPrice * (rollback/100)));



// console.log (typeof title);
// console.log (typeof fullPrice);
// console.log (typeof adaptive);
// console.log (typeof screenPrice);
// console.log (typeof  rollback);