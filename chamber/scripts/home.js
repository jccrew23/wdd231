//save the url
const url = 'https://jccrew23.github.io/wdd231/chamber/data/partners.json';

//grab section from HTML
const cards = document.querySelector('#ads');

//function for fetch
async function getPartnerData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.partners); temp testing
    busAd(data.partners)
}

getPartnerData();


//function to display silver and gold members randomly
function busAd(businesses) {
    //reset gallery 
    cards.innerHTML = "";
    
    silverAndGold = [];

    businesses.forEach(business =>{
        let membership = business.memLevel;
        if (membership == 2 || membership ==3) {
            silverAndGold.push(business);
        };
    }
    )
    //shuffle array
    silverAndGold.sort();

    //return the number of items indicated
    shortSilverAndGold = silverAndGold.slice(0, 3);

    shortSilverAndGold.forEach(item => {
//create elements
        let section = document.createElement('section');
        let logo = document.createElement('img');
        const imgFile = item.imgFile;
        //picture attribtes
        logo.setAttribute('src', imgFile);
        logo.setAttribute('alt','picture of partner business in Chamber of commerce');
        logo.setAttribute('loading','lazy');
        logo.setAttribute('width','50');
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let web = document.createElement('p');
        let level = document.createElement('p');

        //add text
        name.innerHTML = item.businessName;
        phone.innerHTML = item.phoneNum;
        address.innerHTML = item.address;
        web.innerHTML = item.url;
        if (item.memLevel == 2) {
            level.innerHTML = `Silver Member`;
        }
        else {
            level.innerHTML =  `Gold Member`;
        };

        //add to section and page
        section.appendChild(logo);
        section.appendChild(name);
        section.appendChild(level);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(web);

        cards.appendChild(section);
    })
};