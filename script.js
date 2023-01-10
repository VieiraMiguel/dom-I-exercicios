const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

function addInput () {

    const novaFruta = document.getElementById("inputFruta").value

    frutas.push(novaFruta)

    const fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = frutas[3]
    
}