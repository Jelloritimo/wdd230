const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=b19cf87a8e1c71e3e589ab2bc67cc544";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
})