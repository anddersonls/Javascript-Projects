const openModal = document.querySelector('.open_button')
const modalContainer = document.querySelector('.modal_container')
const modalContent = document.querySelector('.modal_content')
const closeModal = document.querySelector('.fa-times')

openModal.addEventListener('click', function(){
    modalContainer.classList.add('active')
    modalContent.classList.add('is-active')
    modalContent.classList.remove('upModal')
    closeModal.classList.add('close')
})

closeModal.addEventListener('click', function(){
    modalContainer.classList.remove('active')
    modalContent.classList.remove('is-active')
    modalContent.classList.add('upModal')
    closeModal.classList.remove('close') 
})

