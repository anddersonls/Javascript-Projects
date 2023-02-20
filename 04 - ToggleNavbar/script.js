const menu = document.querySelector('.toggle')
const navbar = document.querySelector('.links_container')

const mobileMenu = () => {
    menu.classList.toggle('is_active')
    navbar.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)