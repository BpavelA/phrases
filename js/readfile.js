// Используем fs модуль для работы с файлами
const fs = require('fs');

// Чтение файла с указанием кодировки UTF-8
let data = fs.readFile('../01ma.txt', 'utf8', (err, text) => {
 if (err) {
  console.error('Ошибка при чтении файла:', err);
  return;
 }

 // Разделяем содержимое на строки
 console.log(text.split('\n'));
});


