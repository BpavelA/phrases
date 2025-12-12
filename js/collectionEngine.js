'use strict';

const data = ["Ich stehe auf dem Standpunkt, dass...",
 "Meines Erachtens ist das ...",
 "Für mich steht fest, dass ...",
 "Ich vertrete die Ansicht, dass ...",
 "Ich bin der festen Übezeugung, dass ..."];

const summary = document.querySelector('#ma');

data.forEach(phrase =>
{
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





