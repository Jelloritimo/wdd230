const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {



    let li = document.createElement("li");
    let xbutton = document.createElement("button");
    li.innerHTML = `Item: <strong>${input.value}</strong>`;
    list.appendChild(li);

    li.appendChild(xbutton);
    xbutton.textContent = "❌";
    xbutton.addEventListener("click", () => {
        list.removeChild(li);
    })



});