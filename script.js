const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const frutas2 = document.getElementById("fruta-2")
frutas2.innerHTML = frutas[1]

const frutas3 = document.getElementById("fruta-3")
frutas3.innerHTML = frutas[2]

//2

const valores = document.getElementById("name")
console.log(valores.value)


//3

const frutaNova = () => {
 let fruta4 = document.getElementById("fruta-4");
fruta4.innerHTML = valores.value
}




