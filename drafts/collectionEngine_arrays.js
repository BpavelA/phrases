// Перебор массивов - работает!

'use strict';

const meinungen = [
 "Meinungen ausdrücken",
 "Ich stehe auf dem Standpunkt, dass...",
 "Meines Erachtens ist das ...",
 "Für mich steht fest, dass ...",
 "Ich vertrete die Ansicht, dass ...",
 "Ich bin der festen Übezeugung, dass ..."];

const zustimmung = [
 "Zustimmung ausdrücken",
 "Der Meinung bin ich auch.",
 "Das ist auch meine Meinung.",
 "Ich bin ganz deiner Meinung.",
 "Das stimmt.",
 "Ja, genau.",
 "Das ist richtig.",
 "Das ist eine gute Idee.",
 "Es ist mit Sicherheit so, dass...",
 "Das sehe ich auch so.",
 "Da hast du völlig recht.",
 "Da kann ich dir nur völlig recht geben.",
 "Dem kann ich mich nur anschließen",
 "Ich vertrete auch die Position, dass ...",
 "Dem kann ich zustimmen, weil ...",
 "Das kann ich nur bestätigen.",
 "Das kann ich mir gut vorstellen.",
 "Ich bin der gleichen Meinung.",
 "Die Sichtweise würde ich unterstützen."];

const h1 = document.querySelector('h1');
const collection = [meinungen, zustimmung];

collection.reverse();

collection.forEach(group => {
 let details = document.createElement('details');
 let summary = document.createElement('summary');
 h1.after(details);
 details.prepend(summary);
 summary.innerHTML = group[0];
 let id = group[0].split(' ');
 summary.id = id;

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











