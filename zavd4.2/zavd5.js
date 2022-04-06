/*Створити функцію, яка за номером місяця повертає його назву. */
function MakeOperation(firstNumber, operation) {
    return operation(firstNumber);
}
const array = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];

let x = parseInt(prompt("введіть номер місяця"));
alert(MakeOperation(x, function (x) { return array[x-1] }));
