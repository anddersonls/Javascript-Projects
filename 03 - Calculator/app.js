const items = document.querySelectorAll('.item');
const display = document.getElementById('result');

const concatenate = (e) => display.value += e.value
const cleanAll = () => display.value = '' ;
const deletePreviousValue = () => display.value = display.value.toString().slice(0, -1)
const result = () => display.value = eval(display.value);

items.forEach( (e) =>{
    e.addEventListener('click', function(){
        if(e.value == 'AC') cleanAll();
        else if(e.id == 'delete') deletePreviousValue();
        else if (e.value =='=') result();
        else concatenate(e);
    })
})

