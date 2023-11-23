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

//valores primitivos
let nombre = 'Mi nombre' //string
let edad = 30 //number
let soltero = true //o false, es un boolean
let zero = null //valor especial
let incognita //undefined

//valores referenciales
//object - parejas clave/valor
let ficha = {
    nombre: 'Mi nombre',
    edad: 30,
    soltero: true
}

console.log(nombre)
console.log(ficha)

//acceso a propiedades
//por .
console.log(ficha.edad)
//por nombre de propiedad
console.log(ficha['edad'])

//array
let lista = [
    'paul',
    'john',
    'george',
    'ringo'
]
console.log(lista)

//acceso a elementos
console.log(lista[3])

//funciones
let imprimir = function algo(usuario) {
    console.log('Hola ', usuario.nombre)
    console.log('tu edad es: ', usuario.edad)
}
imprimir(ficha)

//diferencia entre valor y referencia
let a = {clave1: 30, clave2: 50}
let b = a
a.clave1 = 40
console.log(a)
console.log(b)