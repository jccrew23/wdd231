//find the area in the document
const menu = document.querySelector('#hamMenu');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () =>{
    nav.classList.toggle('show');
    menu.classList.toggle('show');
});