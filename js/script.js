let title = prompt("Как называется ваш проект?", "myProject");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let rollback = Math.random() * 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let uTT = screens.split('')

let service1 = prompt("Какой дополнительный тип услуги нужен?", "service1")
let servicePrice1 = +prompt("Сколько это будет стоить?", "5000")
let service2 = prompt("Какой дополнительный тип услуги нужен?", "service2")
let servicePrice2 = +prompt("Сколько это будет стоить?", "5000")
let allServicePrices;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        console.log(price);
        return 'Даём скидку в 10%'
    } else if (15000 <= price && price < 30000) {
        console.log(price);
        return 'Даем скидку в 5%'
    } else if (0 <= price && price < 15000){
        console.log(price);
        return 'Скидка не предусмотрена'
    } else {
        console.log(price);
        return 'Что-то пошло не так'
    }
};

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
allServicePrices = getAllServicePrices();

const getFullPrice = function() {
    return screenPrice + allServicePrices;
};
fullPrice =  getFullPrice();

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 
title = getTitle(); 

const  getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};
servicePercentPrice = getServicePercentPrices();
    






showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)



    
console.log(getRollbackMessage(fullPrice));



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