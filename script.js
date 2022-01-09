const d = new Date();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

const fulldate = `${month}/${date}/${year} ${hour}:${minute}:${second}`;

const document.getElementById("footer-p-2").textContent = fulldate;