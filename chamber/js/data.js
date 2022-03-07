// Directory JSON

const cards = document.querySelector('.cards');
const requestURL = "https://jelloritimo.github.io/wdd230/chamber/data.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
    });

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

    cimage.setAttribute("src", company.image);
    cimage.setAttribute('loading', 'lazy');

    card.appendChild(cname);
    card.appendChild(caddress);
    card.appendChild(cphone);
    card.appendChild(cwebsite);
    card.appendChild(cimage);

    document.querySelector('div.cards').appendChild(card);
    }