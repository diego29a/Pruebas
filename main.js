//Práctica 1
let msg = "Hola Mundo"

console.log(msg)

document.addEventListener("DOMContentLoaded", init)

function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
}


