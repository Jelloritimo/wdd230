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

let headerDateBox = document.getElementById("display-date");

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
    }
    else{
        headerDateBox.classList.add("hide");
    }
}

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
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
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu; //When user clicks x(hamburgerBtn)...
