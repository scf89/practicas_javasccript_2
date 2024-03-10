const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
    console.log('Elemento con la clase .fn-remove-me eliminado.');
} else {
    console.log('No se encontró ningún elemento con la clase .fn-remove-me.');
}