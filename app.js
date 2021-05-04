const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('.nav-bar');
const body = document.querySelector('body');
const menuToogleLines = document.querySelectorAll('.menu-line');





const closeNav = () => {
    navLinks.classList.toggle('close')
    navBar.classList.toggle('close')
    body.classList.toggle('close')
    menuToggle.classList.toggle('close')
    menuToogleLines.forEach(element => {
        element.classList.toggle('close')
    });
}

menuToggle.addEventListener('click', closeNav)