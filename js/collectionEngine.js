// Загрузка из текстовых файлов - Работает!

'use strict';

// Настраиваем звуки

const soundHover = new Audio("sounds/hover_vocabulare.mp3");
const summarySound = new Audio("sounds/summary_sound.mp3");

soundHover.preload = "auto";
summarySound.preload = "auto";

// Настраиваем панель настроек

const h1 = document.querySelector('h1');
const settingsPanel = document.querySelector('.settings-panel');

// Настраиваем футер

const date = new Date();
const footer = document.querySelector('footer');
let year = document.createElement('p');
footer.lastChild.after(year);
year.innerHTML = `${date.getFullYear()}`;

// Создаем пустой массив

const collection = [];

// Загружаем данные из txt файлов

async function loadDataFromFiles() {
 try {

  for (let i = 1; i <= 10; i++) {
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

  // const h1 = document.querySelector('h1');

  collection.forEach(group => {
   let details = document.createElement('details');
   let summary = document.createElement('summary');
   let icon = document.createElement('i');
   h1.after(details);
   details.prepend(summary);
   summary.innerHTML = group[0];
   let id = group[0].split(' ');
   group.shift();
   group.reverse();
   summary.id = id;
   summary.prepend(icon);
   icon.classList.add('bi', 'bi-rocket-takeoff');
   summary.addEventListener(
    "click", () => {
     soundHover.currentTime = 0;
     summarySound.play();
     icon.classList.toggle('bi-rocket-takeoff');
     icon.classList.toggle("bi-rocket-takeoff-fill");
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

function openSettings() {
 h1.addEventListener("click", () => { settingsPanel.style.display = "block"; })
}

function closeSettings() {
 settingsPanel.addEventListener("click", () => { settingsPanel.style.display = "none"; })
}

window.addEventListener('DOMContentLoaded', loadDataFromFiles);








