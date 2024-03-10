//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btnToClick = document.createElement("button");
btnToClick.textContent = "Click me!";
btnToClick.id = "btnToClick";
btnToClick.addEventListener('click', function(event) {
    console.log('Se hizo clic en el botón. Información del evento:', event);
});
document.body.appendChild(btnToClick);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', function(event) {
    console.log('El segundo input recibió el foco. Valor del input:', event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', function(event) {
    console.log('El tercer input tiene un valor ingresado: ' + event.target.value);
});