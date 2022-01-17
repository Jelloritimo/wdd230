const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

const just_year = `Ⓒ ${year} | Bryce H. Williams | Japan`
const fulldate = `Last Updated: ${month}/${date}/${year} ${hour}:${minute}:${second}`;

document.querySelector("#footer-p-1").textContent = just_year;
document.getElementById("footer-p-2").textContent = fulldate;
