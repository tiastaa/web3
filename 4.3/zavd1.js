let n =parseInt(prompt("Введіть кількість оцінок : "))
let marks=[];
let vidminnik=true;
for (let index = 0; index < n; index++) {
    let x=parseInt(prompt(`Введіть ${index+1} оцінку : `));
    marks.push(x);
}
if(marks.includes(2)==true){
    alert("Двійочник");
}
else
    if(marks.includes(3)==true){
        alert("Трійочник");
    }
    else
        {
            for (let index = 0; index < n; index++) {
                if(marks[index]<10)
                    vidminnik=false;
        }
            if(vidminnik==true)
                alert("Відмінник")
            else
                alert("Хорошист")
        }
        