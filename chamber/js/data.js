// Directory JSON

const requestURL = "https://jelloritimo.github.io/wdd230/chamber/data.json";
var zebraCount = 0;


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
        console.log(companies[0]);
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

    card.setAttribute("id", "gallery");
    cname.setAttribute("id", "cname");
    cwebsite.setAttribute("href", company.website);
    cimage.setAttribute("src", company.image);
    cimage.setAttribute('loading', 'lazy');
    cimage.setAttribute("id", "cimage");
    cimage.classList.add("hide");

    card.appendChild(cimage);
    card.appendChild(cname);
    card.appendChild(caddress);
    card.appendChild(cphone);
    card.appendChild(cwebsite);

    document.querySelector('div.cards').appendChild(card);

    if (zebraCount % 2 !== 0) {
        card.setAttribute("class", "zebra");
    }
    zebraCount++;
}

function toggleGallery(){
    document.querySelectorAll("#galleryBtn").forEach(e => e.classList.add("pressed-directory-btn"));
    document.querySelectorAll("#listBtn").forEach(e => e.classList.remove("pressed-directory-btn"));
    document.querySelectorAll("#cimage").forEach(e => e.classList.remove("hide"));
    document.querySelectorAll("#cname").forEach(e => e.classList.add("hide"));
    document.querySelectorAll("#gallery").forEach(e => e.classList.add("cardDesign"));
    document.querySelectorAll(".cards").forEach(e => e.classList.add("resize-gallery"));
    document.querySelectorAll("#gallery").forEach(e => e.classList.remove("resize-list"));
}
function toggleList(){
    document.querySelectorAll("#galleryBtn").forEach(e => e.classList.remove("pressed-directory-btn"));
    document.querySelectorAll("#listBtn").forEach(e => e.classList.add("pressed-directory-btn"));
    document.querySelectorAll("#cimage").forEach(e => e.classList.add("hide"));
    document.querySelectorAll("#cname").forEach(e => e.classList.remove("hide"));
    document.querySelectorAll("#gallery").forEach(e => e.classList.remove("cardDesign"));
    document.querySelectorAll("#gallery").forEach(e => e.classList.add("resize-list"));
    document.querySelectorAll(".cards").forEach(e => e.classList.remove("resize-gallery"));
}

const galleryBtn = document.getElementById("galleryBtn");
const listBtn = document.getElementById("listBtn");
galleryBtn.onclick = toggleGallery;
listBtn.onclick = toggleList;