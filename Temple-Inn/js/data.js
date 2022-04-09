const requestURL = "https://jelloritimo.github.io/wdd230/Temple-Inn/json/temples.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const temples = jsonObject["temples"];
        temples.forEach(displayTemples);
        console.log(temples[0]);
    });

function displayTemples(temple) {
    let card = document.createElement('section');
    let tname = document.createElement('h2');
    let tcountry = document.createElement('h3');
    let taddress = document.createElement('p');
    let ttel = document.createElement('p');
    let temail = document.createElement('p');
    let tservices = document.createElement('p');
    let thistory = document.createElement('p');
    let tordinances = document.createElement('p');
    let tsessions = document.createElement('p');
    let tclosings = document.createElement('p');
    let timage = document.createElement('img');

    tname.textContent = `${temple.name}`;
    tcountry.textContent = `${temple.country}`;
    taddress.textContent = `${temple.address}`;
    ttel.textContent = `${temple.tel}`;
    temail.textContent = `${temple.email}`;
    tservices.textContent = `${temple.services}`;
    thistory.textContent = `${temple.history}`;
    tordinances.textContent = `${temple.ordinances}`;
    tsessions.textContent = `${temple.sessions}`;
    tclosings.textContent = `${temple.closings}`;
    

    card.setAttribute("id", "gallery");
    tname.setAttribute("id", "tname");
    timage.setAttribute("src", temple.image);
    timage.setAttribute('loading', 'lazy');
    timage.setAttribute("id", "cimage");

    card.appendChild(timage);
    card.appendChild(tname);
    card.appendChild(tcountry);
    card.appendChild(taddress);
    card.appendChild(ttel);
    card.appendChild(temail);
    card.appendChild(tservices);
    card.appendChild(thistory);
    card.appendChild(tordinances);
    card.appendChild(tsessions);
    card.appendChild(tclosings);

    document.querySelector('div.cards').appendChild(card);
}