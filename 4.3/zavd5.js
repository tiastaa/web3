let arr1=[];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
for(let i=0; i<20; i++){
    let x=getRandomIntInclusive(0,1);
    if(x==0){
        arr1.push("Веселий" );
    }
    else arr1.push("Сумний");
    document.write(`${i+1}. ${arr1[i]}`);
    document.write('<br \/>' );
}
let emo=parseInt(prompt("Введіть номер пункту : "));
if(arr1[emo-1]=="Веселий"){
    document.write('<img src="https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png">' );
}
else{
    document.write('<img src="https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png">' );
}
