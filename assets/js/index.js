'use strict';


// 1 Вычислить сумму первых N элементов последовательности. 
// параметр N задает пользователь (например n=4 , 1+2+3+4)

function getSum(n) {
  let sum = 0;
  for (let i = 0; i <= n ; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(2));




// 2.1 Создать объект Student который содержит следующие свойства: 
// имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. 
// прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте


function Student(firstName, lastName, isMale, age, contacts) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.contacts = contacts;
}

const student1 = new Student('Test', 'Testovich', 18, true, 
{faculty: 123,cathedra: 23,});

console.log(student1);

function getInfo(obj) {
  return console.log(
    obj.firstName, 
    obj.lastName, 
    obj.isMale, 
    obj.age, 
    obj.contacts.faculty, 
    obj.contacts.cathedra
  );
}

getInfo(student1);




// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел

const arr = [];

for (let i = 0; i < 25; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

console.log(arr);



// 3.2 Вывести элементы с четными индексами

const evenIndex = arr.map(function(item, index) {
  if (index % 2) {
    return item;
  };
});

console.log(evenIndex);



// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

const evenElem = arr.filter(function(item) {
  if (!(item % 2)) {
    return item;
  };
});

console.log(evenElem);



// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)

const nullIndex = arr.forEach(function(item, index) {
  if (!item) {
    console.log(index);
  };
});

console.log(nullIndex);



// 3.5 Подсчитать количество нулевых элементов

let nullAmmount = 0;

for (let i = 0; i < arr.length; i++) {
  if (!arr[i]) {
    nullAmmount++;
  }
}

console.log(nullAmmount);




// 4 Создать классы:
// - Книга 
// (автор, название, год издания, издательство)
// - Электронная версия книги 
// (автор, название, год издания, издательство, формат, электронный номер)


class Book {
  constructor(autor, name, year, production) {
    this.autor = autor;
    this.name = name;
    this.year = year; 
    this.production = production;
  }
}

class electronicBook extends Book {
  constructor(autor, name, year, production, format, elecNumber) {
    super(autor, name, year, production);
    this.format = format;
    this.elecNumber = elecNumber;
  }
}

const book = new Book('S King', 'It', 1990, '000 production');
const elecBook = new electronicBook('S King', 'It', 1990, '000 production', 'pdf', 574673);

console.log(book);
console.log(elecBook);




// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, 
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log('fizzbuzz');
    } else
    if (!(i % 3)) {
      console.log('fizz');
    } else
    if (!(i % 5)) {
      console.log('buzz');
    } else
    console.log(i);
  }
}

console.log(fizzBuzz(15));
