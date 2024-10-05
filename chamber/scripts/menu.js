//find the area in the document
menu = document.querySelector('#hamMenu');
nav = document.querySelector('#navigation');

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
    menu.classList.toggle('show');
});