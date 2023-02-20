const menu = document.querySelector('.toggle')
const navbar = document.querySelector('.links_container')

const mobileMenu = () => {
    menu.classList.toggle('is_active')
    menu.classList.toggle('active')
    navbar.classList.toggle('aside')
}

menu.addEventListener('click', mobileMenu)