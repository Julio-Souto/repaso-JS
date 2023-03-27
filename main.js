import { Libro } from "./Libro.js"

//Ejercicio 1
let array1 = []
let container = document.querySelector(".container")
for(let i = 0; i < 20; i++){
  array1.push(Math.floor(Math.random()*10+1))
}
let ejer1 = document.createElement("p")
ejer1.innerHTML = "<strong>Ejercicio 1</strong> <br>Maximo: "+Math.max(...array1)+"<br>Minimo: "+Math.min(...array1)
console.log(array1)
container.append(ejer1)

//Ejercicio 2
let array2 = [1,2,3,4,5,6,7,8,9,10]
for(let i = array2.length - 1; i > 0; i--){
  let j = Math.floor(Math.random() * (i+1))
  let temp = array2[j]
  array2[j] = array2[i]
  array2[i] = temp
}
let ejer2 = document.createElement("p")
ejer2.innerHTML = "<strong>Ejercicio 2</strong> <br>"+array2.join("-")
console.log(array2)
container.append(ejer2)

//Ejercicio 3
let array3 = []
for(let i = 0; i < array1.length; i++){
  if(array1[i]%2===0)
    array3.push(array1[i])
}
let ejer3 = document.createElement("p")
ejer3.innerHTML = "<strong>Ejercicio 3</strong> <br>"+array3.join("-")
console.log(array3)
container.append(ejer3)

//Ejercicio 4
let ejer4 = document.createElement("p")
ejer4.innerHTML = "<strong>Ejercicio 4</strong> <br>"+array1.sort((a,b) => {return a-b}).join("-")+"<br>"+array1.sort((a,b) => {return b-a}).join("-")
container.append(ejer4)

//Ejercicio 5
function hacerDescuento(tipo, precio){
  if(tipo==="permanente")
    return precio*0.5
  else if(tipo==="temporal")
    return precio*0.8
  else
    return precio
}
let ejer5 = document.createElement("p")
ejer5.innerHTML = "<strong>Ejercicio 5</strong> <br>"+hacerDescuento("permanente",90.214)+"<br>"+hacerDescuento("temporal",40)+"<br>"+hacerDescuento("asdwads",29.80)
container.append(ejer5)

//Ejercicio 6
let libro1 = new Libro("ISBANDJWAHSJF123846","Libro Libro","Autor Autor",20)
let libro2 = new Libro("PALSDJWNASDKD483158","Libro no Libro","Autor no Autor",50)

let ejer6 = document.createElement("p")
ejer6.innerHTML = "<strong>Ejercicio 6</strong> <br>"
ejer6.innerHTML += (libro1.paginas>libro2.paginas) ? "Libro 1 es mas largo con "+libro1.paginas+" paginas" : "Libro 2 es mas largo con "+libro2.paginas + " paginas"
ejer6.innerHTML += "<br>"+libro1.getData()+"<br>"
ejer6.innerHTML += libro2.getData()
container.append(ejer6)

//Ejercicio 7
let titulo = document.createElement("p")
titulo.innerHTML = "<strong>Ejercicio 7</strong><br>"
container.append(titulo)
let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let input = document.createElement("input")
input.type = "number"
input.pattern = "\d{8}"
input.id = "dni"
container.append(input)
let ejer7 = document.createElement("p")
ejer7.innerHTML = ""
let button = document.createElement("button")
button.textContent = "Boton"
button.id = "boton"
button.onclick = () => {
  if(document.getElementById("dni").value.length === 8){
    let number = document.getElementById("dni").value % 23
    ejer7.innerHTML = document.getElementById("dni").value+letra[number]
  }
}
container.append(button)
container.append(ejer7)

//Ejercicio 8
let link = document.createElement("a")
link.text = "Ejercicio 8"
link.href = "./js-basic-node-exercise-main/index.html"
container.append(link)