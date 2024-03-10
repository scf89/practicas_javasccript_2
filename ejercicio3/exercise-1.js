//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = document.createElement("ul");
countries.forEach(country => {
    const listItem = document.createElement("li");
    listItem.textContent = country;
    lista.appendChild(listItem);
});
const countryListDiv = document.createElement("div");
countryListDiv.appendChild(lista);
const printHereDiv = document.querySelector('[data-function="printHere"]');
printHereDiv.parentNode.insertBefore(countryListDiv, printHereDiv);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul = document.createElement("ul");
cars.forEach(car => {
    const li = document.createElement("li");
    li.textContent = car;
    ul.appendChild(li);
});
printHereDiv.appendChild(ul);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const containerDiv = document.createElement("div");
containerDiv.id = "container";
countries2.forEach(country => {
    const countryDiv = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = country.title;
    const img = document.createElement("img");
    img.src = country.imgUrl;
    img.alt = country.title;
    countryDiv.appendChild(h4);
    countryDiv.appendChild(img);
    containerDiv.appendChild(countryDiv);
});
document.body.appendChild(containerDiv);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const botonEliminarUltimo = document.createElement("button");
botonEliminarUltimo.textContent = "Eliminar último div";
botonEliminarUltimo.addEventListener("click", function() {
    const divs = document.querySelectorAll("#container > div");
    const ultimoDiv = divs[divs.length - 1];
    
    if (ultimoDiv) {
        ultimoDiv.remove();
    }
});
document.body.appendChild(botonEliminarUltimo);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const countries3 = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const containerDiv2 = document.createElement("div");
containerDiv2.id = "container";

countries3.forEach(country => {
    const countryDiv = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = country.title;

    const img = document.createElement("img");
    img.src = country.imgUrl;
    img.alt = country.title;

    // Crear botón de eliminación para este div
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        countryDiv.remove(); // Eliminar este div al hacer clic en el botón
    });

    countryDiv.appendChild(h4);
    countryDiv.appendChild(img);
    countryDiv.appendChild(botonEliminar); // Agregar el botón al div

    containerDiv2.appendChild(countryDiv);
});

document.body.appendChild(containerDiv2);


