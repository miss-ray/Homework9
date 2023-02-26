const burgerMenu = document.querySelector('.burger-btn')
burgerMenu.addEventListener('click', (e) => {
    e.target.classList.toggle('active')
})