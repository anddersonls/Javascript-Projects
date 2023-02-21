const plusButton = document.querySelectorAll('.fa-plus-square')
const minusButton = document.querySelectorAll('.fa-minus-square')
const answerContainer = document.querySelectorAll('.answer-container')

plusButton.forEach((event, eCounter)=> {
    event.addEventListener('click', function(){
        event.classList.add('close')
        answerContainer[eCounter].classList.add('block')
        minusButton[eCounter].classList.add('block')
        for(let i=0; i < answerContainer.length; i++){
            if(i!=eCounter) {
                answerContainer[i].classList.remove('block')
                plusButton[i].classList.remove('close')
                minusButton[i].classList.remove('block')
            }
        }
    })  
})

minusButton.forEach((e, counter)=> {
    e.addEventListener('click', function(){
        e.classList.remove('block')
        plusButton[counter].classList.remove('close')
        answerContainer[counter].classList.remove('block')
    })
}) 