const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

const last_update = `Ⓒ ${year} | Bryce H. Williams | Last Updated: ${month}/${date}/${year} ${hour}:${minute}:${second}`;

document.getElementById("footer-p-1").textContent = last_update;