// Загрузка из текстовых файлов - Работает!

'use strict';

// Настраиваем звуки

const soundHover = new Audio("sounds/hover_vocabulare.mp3");
const summarySound = new Audio("sounds/summary_sound.mp3");
soundHover.preload = "auto";
summarySound.preload = "auto";

// Создаем пустой массив

const collection = [];

// Загружаем данные из txt файлов

async function loadDataFromFiles() {
 try {

  for (let i = 1; i <= 5; i++) {
   let response = await fetch(`${i}.txt`);

   if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
   }

   let src = await response.text();
   let data = src.split('\n');
   collection.push(data);
  }

  collection.reverse();
  console.log(collection);

  // Строим структуры страницы

  const h1 = document.querySelector('h1');

  collection.forEach(group => {
   let details = document.createElement('details');
   let summary = document.createElement('summary');
   h1.after(details);
   details.prepend(summary);
   summary.innerHTML = group[0];
   let id = group[0].split(' ');
   group.shift();
   group.reverse();
   summary.id = id;
   summary.addEventListener(
    "click", () => {
     soundHover.currentTime = 0;
     summarySound.play();
    }
   )

   group.forEach(phrase => {
    let index = group.indexOf(phrase);
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    summary.after(div);
    div.prepend(input);
    input.after(label);
    label.innerHTML = phrase;
    div.classList.add('vocabulare');
    input.type = 'checkbox';
    input.id = `${id} ${index}`;
    label.setAttribute('for', `${id} ${index}`);
   });

  });

 } catch (error) {
  console.error('Ошибка:', error);
 }
};

window.addEventListener('DOMContentLoaded', loadDataFromFiles);








