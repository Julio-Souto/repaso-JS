
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")

let parrafo = document.createElement("p")
form1.addEventListener("submit",(e) => {
  e.preventDefault()
  parrafo.classList.add("mi-parrafo")
  parrafo.innerHTML = "Vamos a crear nodos. Para ello utilizaremos el método "+'<strong>'+"document.createElement()</strong>"
  // parrafo.style.backgroundColor = "white"
  // parrafo.style.color = "black"
  // parrafo.style.padding = ".5em"
  document.querySelector(".parrafo").append(parrafo)
})

let lista = document.createElement("ul")
form2.addEventListener("submit",(e) => {
  e.preventDefault()
  // lista.style.backgroundColor = "white"
  // lista.style.color = "black"
  // lista.style.padding = ".5em 2em"
  // lista.style.listStyleType = "decimal"
  lista.classList.add("mi-lista")
  lista.innerHTML = `<li>HTML 5
    <ul>
        <li>Formularios</li>
        <li>Enlaces</li>
        <li>Imágenes</li>
    </ul>
  </li>
  <li>JavaScript
    <ul>
        <li>let/const/var</li>
        <li>Arrays</li>
        <li>Nodos</li>
    </ul>
  </li>
  <li>Accesibilidad
    <ul>
        <li>Formularios</li>
    </ul>
  </li>`
  // let listaChild1 = document.createElement("li")
  // let listaChildl1 = document.createElement("ul")
  // let l1 = document.createElement("li")
  // l1.style.listStyleType = "decimal"
  // l1.innerHTML="Formularios"
  // let l2 = document.createElement("li")
  // l2.style.listStyleType = "decimal"
  // l2.innerHTML="Enlaces"
  // let l3 = document.createElement("li")
  // l3.style.listStyleType = "decimal"
  // l3.innerHTML="Imagenes"
  // listaChildl1.append(l1)
  // listaChildl1.append(l2)
  // listaChildl1.append(l3)
  // listaChild1.innerHTML="HTML 5"
  // listaChild1.style.listStyleType = "decimal"
  // listaChild1.append(listaChildl1)
  // lista.append(listaChild1)
  document.querySelector(".lista").append(lista)
  // document.querySelectorAll(".lista li").forEach((e) => {
  //   e.style.listStyleType = "decimal"
  // })
  // document.querySelectorAll(".lista li li").forEach((e) => {
  //   e.style.color = "red"
  // })
})