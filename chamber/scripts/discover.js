//POPULATION SECTION
//declaring variables
const currentPopulation = document.querySelector('#census');

//api url
const censusURL = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-500/records?select=population&where=geoname_id%3A%204782167&limit=20';

//use fetch to retrieve api data
async function apiFetch() {
    try {
        const responses = await fetch(censusURL);
        if (responses.ok) {
            const censusData = await responses.json();
            console.table(censusData);
            displayPopulation(censusData);
        } else {
            throw Error(await responses.text());
            }  
        }
    catch (error) {
         console.log(error);
    }
}

//run the api fetch function
apiFetch();

function displayPopulation(data) {
    // console.log('works!') testing only
    currentPopulation.innerHTML = `Current Population: ${data.results[0].population}`;
  }

//QUOTES

let i = 0; //start position
let images = [];
let time = 3000;

//image list
images[0] = 'images/smallbusiness1.webp';
images[1] = 'images/smallbusiness2.webp';
images[2] = 'images/smallbusiness3.webp';
images[3] = 'images/smallbusiness4.png';
images[4] = 'images/smallbusiness5.webp';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else {
        i=0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;



