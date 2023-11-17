//Práctica 1
let msg = "Hola Mundo"

console.log(msg)

document.addEventListener("DOMContentLoaded", init)

function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}

//No hace falta que entendamos esta función todavía
function loadData(url) {
    fetch(url)
        .then(response => json = response.json())
        .then(data => pintaMisHobbies(data))
}

function pintaMisHobbies(json) {
    console.log(json)
}