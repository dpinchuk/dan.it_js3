/*
 Реализовать функцию подсчета факториала числа.

 Технические требования:
 - Написать функцию подсчета факториала числа.
 - Считать с помощью модального окна браузера число, которое введет пользователь.
 - С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.
 - Использовать синтаксис ES6 для работы с перемеными и функциями.
*/

let isInteger = (num) => {
    return num - parseInt(num) === 0;
};

let checkNumber = (num) => {
    return !(isNaN(num) || !isInteger(num) || num < 0);
};

let getFact = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};

let num = prompt("Input number: ");

while (!checkNumber(num)) {
    num = prompt("Input correct number: ");
}

console.log("Factorial is: " + getFact(num));
document.write("Factorial is: " + getFact(num));