document.addEventListener("DOMContentLoaded", function() {
    mostrarInicio();
});

function menu(evento, categoria) {
    ocultarTodo();
    document.getElementById(categoria).style.display = "block";
    document.getElementById("menuLateral").style.display = "none";
}

function volverInicio() {
    mostrarInicio();
}

function ocultarTodo() {
    let secciones = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }
}

function mostrarInicio() {
    ocultarTodo();
    document.getElementById("inicio").style.display = "block";
    document.getElementById("menuLateral").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {

    const imgBienvenida = document.getElementById("imgBienvenida");
    const audioBienvenida = document.getElementById("audioBienvenida");

    if (imgBienvenida && audioBienvenida) {
        imgBienvenida.addEventListener("click", () => {
            audioBienvenida.currentTime = 0;
            audioBienvenida.play();
        });
    }

});