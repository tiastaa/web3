let arr1=[];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
for(let i=0; i<100; i++){
    
    arr1.push(getRandomIntInclusive(-500,500));
}

let sum=0;
let play=confirm("Почати гру");
while(play==true){
    
    let new_play=parseInt(prompt("Введіть вибраний номер: "))-1;
    if(arr1[new_play]=="Empty")
        {
            alert("Ви вибирали уже цей номер")
        }
    else{
        sum+=arr1[new_play];
        arr1[new_play]="Empty";
    }
    alert(`Сума виграшу ${sum}`)
    play=confirm("Чи бажаєте ви грати далі?");
}
document.write(`Ваш баланс: ${sum}`)