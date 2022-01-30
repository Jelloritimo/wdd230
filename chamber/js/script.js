const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

const last_update = `Ⓒ ${year} Tokyo-Bay Chamber | Bryce H. Williams | WDD 230 Project | Last Modification: ${month}/${date}/${year} ${hour}:${minute}:${second}`;

document.getElementById("footer-p-1").textContent = last_update;

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu; //When user clicks x(hamburgerBtn)...
