/*Задача 4. Створити функцію, яка випадковим чином виводить на екран одне із зображень
(шляхи до зображень передаються у функцію як аргументи)*/

function fetchDogs() 
{ 
 fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => { 
        console.log(data)
        var img = document.createElement("img");
        img.src = data.message
        document.body.appendChild(img);
    });
}