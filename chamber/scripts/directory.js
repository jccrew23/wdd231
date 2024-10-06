// const partners = [
//     {
//         businessName: 'Apple Valley Farms',
//         address: '175 Apple Farm Lane Roanoke, VA 24002',
//         phoneNum: '(540)984-3452',
//         url: 'applevalleyfrm.com',
//         imgFile: '',
//         memLevel: 1,
//     },
//     {
//         businessName: "Mario's Pizza",
//         address: '990 Hardy Drive Roanoke, VA 24018',
//         phoneNum: '(540)914 0298',
//         url: 'rkesbestpizza.com',
//         imgFile: '',
//         memLevel: 3,
//     },
//     {
//         businessName: 'The Reserve at Wasena',
//         address: '26 Wasena Way Roanoke, VA 24005',
//         phoneNum: '(540)967-2500',
//         url: 'reserveatwasena.com',
//         imgFile: '',
//         memLevel: 2,
//     },
//     {
//         businessName: 'TIDY Services',
//         address: '2011 Cook Lane Roanoke, VA 24153',
//         phoneNum: '(540)208-0527',
//         url: 'tidyinc.com',
//         imgFile: '',
//         memLevel: 3,
//     },
//     {
//         businessName: 'Roanoke Rock Corporation',
//         address: '5765 Wild Drive Roanoke, VA 24002',
//         phoneNum: '(540)674-5566',
//         url: 'rkerockcorp.com',
//         imgFile: '',
//         memLevel: 1,
//     },
//     {
//         businessName: 'Southwest Virginia Dance Co',
//         address: '1005 Colorado Ave SE Roanoke, VA 24013',
//         phoneNum: '(540)387-3977',
//         url: 'swvadanceco.com',
//         imgFile: '',
//         memLevel: 2,
//     },
//     {
//         businessName: 'Dennis Law Firm, P.C.',
//         address: '2759 Electric Drive Roanoke, VA 24018',
//         phoneNum: '(540)725-5801',
//         url: 'dannydennisesq.com',
//         imgFile: '',
//         memLevel: 1,
//     },
//     {
//         businessName: 'Dell Family Dental',
//         address: '4819 Starkey Drive NE Roanoke, VA 24015',
//         phoneNum: '(540)988-8000',
//         url: 'dellfamilydental.com',
//         imgFile: '',
//         memLevel: 3,
//     },
//     {
//         businessName: 'Star City Realty',
//         address: '3802 Electric Drive Roanoke, VA 24018',
//         phoneNum: '(540)989-4556',
//         url: 'starcityrealty.com',
//         imgFile: '',
//         memLevel: 2,
//     },
//     {
//         businessName: 'United Valley Credit Union',
//         address: '335 W Main Street Roanoke, VA 24153',
//         phoneNum: '(540)302-3200',
//         url: 'unitedvalleycu.com',
//         imgFile: '',
//         memLevel: 3,
//     }
// ];

//save the url
const url = 'https://jccrew23.github.io/wdd231/chamber/data/partners.json';

//grab section from HTML
const cards = document.querySelector('#members');

//function for fetch
async function getPartnerData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.partners); temp testing
    displayCards(data.partners);
}

getPartnerData();

//create function
function displayCards(data) {

    //reset gallery
    cards.innerHTML = '';

    //look through each item in array
    data.forEach(partner =>{

        //create elements
        let crd = document.createElement('section');
        crd.setAttribute('class','card');
        let partnerName = document.createElement('h3');
        let industryType = document.createElement('h4');
        let picture = document.createElement('img');
        const imgFile = partner.imgFile;

        //set picture attributes
        picture.setAttribute('src', imgFile);
        picture.setAttribute('alt','picture of partner business in Chamber of commerce');
        picture.setAttribute('loading','lazy');
        picture.setAttribute('width','100');
        let address = document.createElement('p');
        address.setAttribute('class','address');
        let phone = document.createElement('p');
        let web = document.createElement('p');

        //add text
        partnerName.innerHTML = partner.businessName;
        industryType.innerHTML = partner.industry;
        address.innerHTML = `<strong>Address:</strong> ${partner.address}`;
        phone.innerHTML = `<strong>Phone:</strong> ${partner.phoneNum}`;
        web.innerHTML = `<strong>URL:</strong> ${partner.url}`;

        //append to card and document
        crd.appendChild(partnerName);
        crd.appendChild(industryType);
        crd.appendChild(picture);
        crd.appendChild(address);
        crd.appendChild(phone);
        crd.appendChild(web);

        cards.appendChild(crd);
    })
};

// toggle grid view
const listToggle = document.querySelector('#listView');
const gridToggle = document.querySelector('#gridView');
const display = document.querySelector('#members');


listToggle.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

gridToggle.addEventListener('click', () => {
    if (display.classList.contains('grid')) {
        
        display.classList.remove('list')
    } else {
        display.classList.add('grid');
        display.classList.remove('list');
    }
});