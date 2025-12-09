const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
 if (err) {
  console.error('Ошибка при чтении файла:', err);
  return;
 }

 const src = data.split('\n');

 src.forEach(p => {
  console.log(`<p>${p}</p>`);
 });
});