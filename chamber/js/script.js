const d = new Date();
const day = d.getDay();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

const last_update = `Ⓒ ${year} Tokyo-Bay Chamber | Bryce H. Williams | WDD 230 Project | Last Modification: ${month}/${date}/${year} ${hour}:${minute}:${second}`;

document.getElementById("footer-p-1").textContent = last_update;

// Header date

let headerDateBox = document.getElementById("display-date");
let meetGreet = document.getElementById("meetgreet");

headerDate();

function headerDate(){
    requestedFormat = Intl.DateTimeFormat("en", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    console.log(requestedFormat.format(Date.now()));
    if (day == 1 || day == 2){
        headerDateBox.append(requestedFormat.format(Date.now()));
        meetGreet.append(`🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`);
    }
    else{
        headerDateBox.classList.add("hide");
        meetGreet.classList.add("hide");
    }
}

// Lazy Load

const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

// Day count & Visit count

const daycount = document.getElementById("daycount");
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

let thisVisit = d;
let lastVisit = window.localStorage.getItem("visitUpdate");

if (lastVisit !== null) {
    var timeDifference = thisVisit.getTime() - lastVisit;
    var dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    if (dayDifference < 1) {
        daycount.textContent = `Welcome back! Your last visit was today.`;
    }
    else if (dayDifference == 1) {
        daycount.textContent = `Welcome back! Your last visit was ${dayDifference} day ago.`;
    }
    else {
        daycount.textContent = `Welcome back! Your last visit was ${dayDifference} days ago.`;
    }
}
else {
    daycount.textContent = `Welcome to your first visit!`;
}

// numVisits++;
// localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visitUpdate", d.getTime());

// Form page hidden date
// let formVisit = document.getElementById("formvisit");
// formVisit.textContent = `Visited this form on: ${requestedFormat.format(Date.now())}`;

// Hamburger Button

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu; //When user clicks x(hamburgerBtn)...

// weather api
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=b19cf87a8e1c71e3e589ab2bc67cc544";

fetch(weatherAPI)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temperature').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector(".weather-condition").textContent = jsObject.weather[0].description;
    document.querySelector("#current-speed").textContent = jsObject.wind.speed;
})

