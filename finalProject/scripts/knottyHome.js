//selects document area for display
const welMessage = document.querySelector('#banner');
welMessage.classList.add('welcomeMessage');


emailList();

welMessage.addEventListener('click', () => {
    window.location.href = "https://jccrew23.github.io/wdd231/finalProject/contact.html";
})

function emailList() {
    //stores the number of visits
    let numVisits = Number(window.localStorage.getItem('numVisits-1s')) || 0;

    //what message to display if new or not
    if (numVisits == 0){
        welMessage.innerHTML = `Welcome to Knotty Intentions! Subscribe to our newsletter&#8287<u>HERE</u>`;
    } else {
        welMessage.innerHTML = `Nice to see you again! Don't miss out, JOIN the email list&#8287<u>HERE</u>!`;
    }

    //add one to the count
    numVisits++;

    //store in local storage
    localStorage.setItem('numVisits-1s',numVisits);

}

//hamburger menu

//choose document objects
const icon = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navigation');

//event listener
icon.addEventListener('click', ()=> {
    icon.classList.toggle('open');
    navigation.classList.toggle('open');
})






