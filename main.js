/*
import {secundaria} from "./practica1.js"

let principal = 100

function saludar() {
    let resultado = document.getElementById("resultado")
    let nombre = document.getElementById("campoNombre")
    resultado.innerHTML = nombre.value
}
/*/
/*
let ficha = {
    nombre: "Diego",
    personafavorita: "cualquier perro",
    ponerNota: calcularNota
} 

function calcularNota(){
    //Todo lo que sea

    return 0; //la nota
}
/**/


function factorialrecursivo(n){
    if (n >= 1){
        return n * factorial(n-1)
    } 
    return 1; 
    
}

function factorial(n){
    let m = n;
    let resultado = n;
    while (m >= 1) {
        m = m-1
        resultado = resultado * m
    }
    return resultado;
}


function suma(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++){
        resultado = resultado + lista[i] 
        //console.log("i = ", i)
        //console.log("el valor en i es: ", lista[i])
    };
    return resultado
}

let numeros = [120, 200, 5, 48, 190, -49];
console.log("la suma de la lista es: ", suma(numeros))


let valor = 10
let resultado = factorial(valor)
console.log("El factorial de", valor,"es", resultado)