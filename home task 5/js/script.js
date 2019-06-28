let menuList = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let title = document.getElementById('title');
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
menu.insertBefore(menuList[2], menuList[1]);
let userPrompt = document.querySelector('.prompt');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.innerText = 'Мы продаем только подлинную технику Apple';
console.log(column[1]);
column[1].removeChild(adv);

let userOp = prompt('Как вы относитесь к технике Apple?', '');

userPrompt.innerHTML = '<h2>'+ userOp + '</h2>';


