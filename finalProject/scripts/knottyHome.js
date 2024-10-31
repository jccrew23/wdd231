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

//pull json
//save the url
const productUrl = 'https://jccrew23.github.io/wdd231/finalProject/data/fiberProducts.json';

//grab section from HTML
const prodPreview = document.querySelector('#productsPreview');

//function for fetch
async function getProductData() {
    const response = await fetch(productUrl);
    const data = await response.json();
    // console.table(data.products); temp testing
    displayProductPreview(data.products);
}

//call function to get json
getProductData();

//create the product
function displayProductPreview(data) {
     //reset gallery 
     prodPreview.innerHTML = "";
    
     //shuffle array
     data.sort();
 
     //return the number of items indicated
     shortData = data.slice(0, 3);
 
     shortData.forEach(item => {

        //create elements
         let section = document.createElement('section');
         section.setAttribute('class','preview');
         let img = document.createElement('img');
         const imgFile = `images/${item.imageFile}`;

         //picture attribtes
         img.setAttribute('src', imgFile);
         img.setAttribute('alt', item.description);
         img.setAttribute('loading','lazy');
         img.setAttribute('width','200');
         let name = document.createElement('h3');
 
         //add text
         name.innerHTML = item.productName;
        
         //add to section and page
         section.appendChild(name);
         section.appendChild(img);
 
         prodPreview.appendChild(section);

         section.addEventListener('click', ()=>{
            window.location.href = "https://jccrew23.github.io/wdd231/finalProject/shop.html";
         })
     })
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 37.29718696865901, lng: -80.03045997614602 },
    });
    const marker = new google.maps.Marker({
        position: { lat: 37.29718696865901, lng: -80.03045997614602 },
        map: map,
      });
      
      const infowindow = new google.maps.InfoWindow({
        content: "Knotty Intentions",
      });
      
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
  }

  window.addEventListener("load", initMap);
  
//current year
document.querySelector('#currentyear').innerHTML = `©${new Date().getFullYear()}`;

//last modified
document.querySelector('#lastModified').innerHTML = new Date(document.lastModified);






