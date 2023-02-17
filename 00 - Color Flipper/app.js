const colors = ["coral", "green", "red", "yellow", "white", "blue", "gray", "pink", "purple"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    newColor = randomColor();

    document.body.style.backgroundColor = colors[newColor];
    color.textContent = colors[newColor];
})

function randomColor(){
    return Math.floor(Math.random() * colors.length);
}