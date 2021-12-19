const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-modal');
menu.addEventListener('click' , openMenu);
closeButton.addEventListener('click' , closeMenu);
function openMenu(){
    modal.style.display = 'block';
}

function closeMenu(){
    modal.style.display = 'none';
}