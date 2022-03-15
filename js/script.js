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
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let  servicePercentPrice = Math.ceil(fullPrice + rollback / 100);

if (fullPrice > 30000){
console.log ('Даём скидку в 10%')
}
else if ((fullPrice > 15000) && (fullPrice < 30000)){
    console.log ('Даём скидку в 5%')
}
else if ((fullPrice < 15000) && (fullPrice > 0)){
    console.log ('Скидка не предусмотрена')
}
else{
    console.log ('Что то пошло не так')
}
    





console.log ('title' + ' ' + title);
console.log ('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей');
console.log ('adaptive' + ' ' + adaptive);
console.log ('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей');
console.log (screens.length);
console.log (screens.toLowerCase().split(', '));


console.log ('Процент отката посреднику за работу' + ' ' + Math.round(fullPrice * (rollback/100)));



console.log (typeof title);
console.log (typeof fullPrice);
console.log (typeof adaptive);
console.log (typeof screenPrice);
console.log (typeof  rollback);