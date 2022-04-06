/*Створити функцію, яка для 4 чисел знаходить добуток;*/
let lambdaDob = (firstNumber, secondNumber ,thirdNumber,fourthNumber ) => { return firstNumber * secondNumber*thirdNumber*fourthNumber; };
let x1 = parseInt(prompt("введіть перше число"));
let x2 = parseInt(prompt("введіть друге число"));
let x3 = parseInt(prompt("введіть третє число"));
let x4 = parseInt(prompt("введіть четверте число"));
alert(lambdaDob(x1, x2,x3,x4));
