let arr1=[];
for (let index = 0; index < 7; index++) {
    let x=parseInt(prompt(`Введіть кількість відвідувачів ${index+1} дня : `));
    arr1.push(x);
}

document.write("номери днів, протягом яких кількість відвідувачів була меншою за 20: ");
for (let index = 0; index < 7; index++) {
    if(arr1[index]<20)
        document.write(`${index+1} ` );
}
document.write('<br \/>' );
let mina=Math.min(...arr1);
document.write(`номери днів, коли кількість відвідувачів була мінімальною : ` );
for (let index = 0; index < 7; index++) {
    if(arr1[index]==mina)
        document.write(`${index+1} ` );
}
document.write('<br \/>' );
let maxa=Math.max(...arr1);
document.write(`номери днів, коли кількість відвідувачів була максимальною : ` );
for (let index = 0; index < 7; index++) {
    if(arr1[index]==maxa)
        document.write(`${index+1} ` );
}
document.write('<br \/>' );
document.write(`загальна кількість клієнтів у робочі дні : ` );
let sumrd=0
for (let index = 0; index < 5; index++) {
    sumrd=sumrd+arr1[index];
    
}
document.write(`${sumrd} ` );
document.write('<br \/>' );
document.write(`загальна кількість клієнтів у вихідні дні : ` )
let sumvd=0
for (let index = 5; index < 7; index++) {
    sumvd=sumvd+arr1[index];
    
}
document.write(`${sumvd} ` );