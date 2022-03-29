'use strict'

const books  = document.querySelectorAll('.books')
let book = document.querySelectorAll('.book')
const removeAdv = document.querySelector('.adv').remove()
const title = document.querySelectorAll('li')
const createNewLi = document.createElement('li');



document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'


book[1].after(book[0])
book[0].after(book[4])
book[4].after(book[3])
book[3].after(book[5])


console.log(book);

book[4].querySelector('a').text = 'Книга 3. this и Прототипы Объектов'


console.log(title);

title[3].after(title[6])
title[6].after(title[8])
title[9].after(title[2])
title[47].after(title[55])
title[55].after(title[49])
title[49].after(title[50])
title[53].after(title[51])


createNewLi.textContent = 'Глава 8: За пределами ES6'
book[2].querySelector('ul').append(createNewLi);
createNewLi.after(title[9])

createNewLi.after(title[26])