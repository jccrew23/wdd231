const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navList');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
})


