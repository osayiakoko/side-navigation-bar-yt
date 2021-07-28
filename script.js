const openNavButton = document.querySelector('#open-nav')
const closeNavButton = document.querySelector('#close-nav')

const sideNav = document.querySelector('.side-nav')
const container = document.querySelector('.container')


function toggleNavButton(){
    openNavButton.classList.toggle('show')
    closeNavButton.classList.toggle('show')
}

function openNav(){
    toggleNavButton()
    sideNav.style.width = '220px'
    container.style.marginLeft = '220px'
}

function closeNav(){
    sideNav.style.width = '0'
    container.style.marginLeft = '0'
    toggleNavButton()
}

openNavButton.addEventListener('click', openNav)
closeNavButton.addEventListener('click', closeNav)