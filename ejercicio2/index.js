//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div = document.createElement("div");
  const p = document.createElement("p");
  const texto = document.createTextNode("Este es un párrafo insertado dinámicamente.");
  p.appendChild(texto);
  div.appendChild(p);
  document.body.appendChild(div);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div2 = document.createElement("div");
div2.id = "contenedor";
document.body.appendChild(div2);
const contenedor = document.getElementById("contenedor");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  const texto = document.createTextNode(`Párrafo ${i}`);
  p.appendChild(texto);
  contenedor.appendChild(p);
}

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const nuevoParrafo = document.createElement("p");
const texto2 = document.createTextNode("Soy dinámico!");
nuevoParrafo.appendChild(texto2);
document.body.appendChild(nuevoParrafo);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Element = document.querySelector("h2.fn-insert-here");
const texto3 = document.createTextNode("Wubba Lubba dub dub");
h2Element.appendChild(texto3);

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
apps.forEach(app => {
  const li = document.createElement("li");
  const texto = document.createTextNode(app);
  li.appendChild(texto);
  ul.appendChild(li);
});
document.body.appendChild(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodosARemover = document.querySelectorAll(".fn-remove-me");
nodosARemover.forEach(nodo => {
  nodo.parentNode.removeChild(nodo); // Elimina el nodo del DOM
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.textContent = "Voy en medio!";
const divAntes = document.querySelector(".fn-insert-here");
divAntes.parentNode.insertBefore(nuevoParrafo2, divAntes.nextSibling);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const nuevoParrafo3 = document.createElement("p");
nuevoParrafo3.textContent = "Voy dentro!";
const divs = document.querySelectorAll(".fn-insert-here");
divs.forEach(div => {
  const p = nuevoParrafo3.cloneNode(true);
  div.appendChild(p);
});
