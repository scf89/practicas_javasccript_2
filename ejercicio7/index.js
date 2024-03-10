const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ul = document.createElement("ul");
places.forEach(place => {
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
});
printHereDiv.appendChild(ul);