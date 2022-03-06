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
let formVisit = document.getElementById("formvisit");
formVisit.textContent = `Visited this form on: ${requestedFormat.format(Date.now())}`;

// Hamburger Button

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu; //When user clicks x(hamburgerBtn)...

// Directory JSON

const cards = document.querySelector('.cards');

fetch("data.json")
    .then(function (response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
    });
// $.getJSON("data.json", function(json){
//     console.log(json);
//     console.table(json); 
//     const companies = json["companies"];
//     companies.forEach(displayCompanies);
// });
// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const companies = jsonObject["companies"];
//     companies.forEach(displayCompanies);
//   });

function displayCompanies(company) {
    let card = document.createElement('section');
    let cname = document.createElement('p');
    let caddress = document.createElement('p');
    let cphone = document.createElement('p');
    let cwebsite = document.createElement('a');
    let cimage = document.createElement('img');

    cname.textContent = `${company.name}`;
    caddress.textContent = `${company.address}`;
    cphone.textContent = `${company.phone}`;
    cwebsite.textContent = `${company.website}`;

    cimage.setAttribute('loading', 'lazy');

    card.appendChild(cname);
    card.appendChild(caddress);
    card.appendChild(cphone);
    card.appendChild(cwebsite);
    card.appendChild(cimage);

    document.querySelector('div.cards').appendChild(card);
    }
