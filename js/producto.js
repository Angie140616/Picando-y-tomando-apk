const inputImagen = document.getElementById("imagen");
const vistaPrevia = document.getElementById("vistaPrevia");

inputImagen.addEventListener("change", () => {
    const archivo = inputImagen.files[0];

    if (archivo) {
        vistaPrevia.src = URL.createObjectURL(archivo);
        vistaPrevia.style.display = "block";
    }
});