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
const prod = document.querySelector('#products');
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

function displayProducts(data) {
    //reset gallery
    prod.innerHTML = '';

    //look through each item in array
    data.forEach(item =>{

        //create elements
        let crd = document.createElement('section');
        crd.setAttribute('class','card');
        let prodName = document.createElement('h3');
        let price = document.createElement('p');
        const imgFile = `images/${item.imageFile}`;

        //set picture attributes
        picture.setAttribute('src', imgFile);
        picture.setAttribute('alt','item.description');
        picture.setAttribute('loading','lazy');
        picture.setAttribute('width','200');
        //add text
        prodName.innerHTML = item.productName;
        price.innerHTML = `$${item.price}`

        //append to card and document
        crd.appendChild(prodName);
        crd.appendChild(picture);
        crd.appendChild(price);

        prod.appendChild(crd);
    })
};

//current year
document.querySelector('#currentyear').innerHTML = `©${new Date().getFullYear()}`;

//last modified
document.querySelector('#lastModified').innerHTML = new Date(document.lastModified);






