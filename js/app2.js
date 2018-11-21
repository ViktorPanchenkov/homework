; 'use strict';
// Задача 2
 let dayNum = prompt('Ведите номер дня недели');

      switch (+dayNum )  {
     case 1:
      alert( 'Понедельник');
      break;
     case 2:
      alert('Вторник');
      break;
     case 3:
      alert('Среда');
         break;
     case 4:
      alert('Четверг');
      break;
     case 5:
      alert('Пятница');
      break;
     case 6:
      alert('Суббота');
      break;
     case 7:
      alert('Воскресенье');
      break;
      default:
          alert('Придурок! Такого дня нет!');
 }


// Задача 3
'use strict';

let x = prompt('Введите Х');
let y = prompt('Введите Y');

let i = ((x, 2) + (y, 2));
if (x <= 0 && y <= 0 && y >= -x - 2 || i <= (1, 2)) {
    alert("Точка попадает в область")
}
else {
    alert("Точка НЕ попадает в область")
}








