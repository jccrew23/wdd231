//declaring variables
const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#description');

//api url
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=37.267208&lon=-79.969523&units=imperial&appid=3edd4c1bc9a4a0cbddfa60f578bfd9a5';

//use fetch to retrieve api data
async function apiFetch() {
    try {
        const responses = await fetch(apiUrl);
        if (responses.ok) {
            const weatherData = await responses.json();
            console.table(weatherData);
            displayResults(weatherData);
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

function displayResults(data) {
    // console.log('works!') testing only
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }
