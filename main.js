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

function loadData(url) {
    let json
    fetch(url)
        .then(response => json = response.json() )
        .then(data => {
            json = data 
            console.log(json)
        })

    console.log(json)
}
