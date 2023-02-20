const openModal = document.querySelector('.open_button')
const modalContainer = document.querySelector('.modal_container')
const modalContent = document.querySelector('.modal_content')
const closeModal = document.querySelector('.fa-times')

openModal.addEventListener('click', function(){
    modalContainer.classList.toggle('active')
    modalContent.classList.toggle('is-active')
    closeModal.classList.toggle('close')
})

closeModal.addEventListener('click', function(){
    modalContainer.classList.toggle('active')
    modalContent.classList.toggle('is-active')
    modalContent.classList.toggle('upModal')
    closeModal.classList.toggle('close') 
})

