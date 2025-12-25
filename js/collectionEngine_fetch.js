// Работает!

'use strict';

async function loadServerFile() {
 try {
  const response = await fetch('01ma.txt');

  if (!response.ok) {
   throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const src = await response.text();

  const data = src.split('\n')

  const summary = document.querySelector('#ma');

  data.forEach(phrase => {
   let index = data.indexOf(phrase);
   let div = document.createElement('div');
   let input = document.createElement('input');
   let label = document.createElement('label');
   summary.after(div);
   div.prepend(input);
   input.after(label);
   label.innerHTML = phrase;
   div.classList.add('vocabulare');
   input.type = 'checkbox';
   input.id = `ma${index}`;
   label.setAttribute('for', `ma${index}`);
  });


 } catch (error) {
  console.error('Ошибка:', error);
 }
}

window.addEventListener('DOMContentLoaded', loadServerFile);








