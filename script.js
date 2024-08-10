document.addEventListener('DOMContentLoaded', function (){

    let images = document.querySelectorAll("img");
    let info = document.getElementById("info");
    

    function cantidadDeImagenes () {
        info.innerHTML = "Esta página tiene un total de" + " " + images.length + " " + "imágenes disponibles." + `<br>`;
    }

    cantidadDeImagenes();

})