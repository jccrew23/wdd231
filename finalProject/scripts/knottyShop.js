const prod = document.querySelector('#products');

//save the url
const productUrl = 'https://jccrew23.github.io/wdd231/finalProject/data/fiberProducts.json';

//function for fetch
async function getProductData() {
    const response = await fetch(productUrl);
    const data = await response.json();
    // console.table(data.products); temp testing
    displayProducts(data.products);
}

//call function to get json
getProductData();

function displayProducts(data) {
    

    //look through each item in array
    data.forEach(item =>{

        //create elements
        let crd = document.createElement('section');
        crd.setAttribute('class','card');
        let prodName = document.createElement('h3');
        let price = document.createElement('p');
        const imgFile = `images/${item.imageFile}`;
        let picture = document.createElement('img');

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
}

//current year
document.querySelector('#currentyear').innerHTML = `©${new Date().getFullYear()}`;

//last modified
document.querySelector('#lastModified').innerHTML = new Date(document.lastModified);
