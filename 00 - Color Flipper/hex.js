const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    let newBackgorundColor = '#'

    for(let i=0; i < 6; i++){
        newBackgorundColor += hex[randomColor()];
    }

    document.body.style.backgroundColor = newBackgorundColor
    color.textContent = newBackgorundColor
})

const randomColor = () => Math.floor(Math.random() * hex.length)