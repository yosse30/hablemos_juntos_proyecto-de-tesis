document.addEventListener("DOMContentLoaded", function() {
    mostrarInicio();
});

/* ===== MENÚ DE CATEGORÍAS ===== */
function menu(evento, categoria) {
    ocultarTodo();

    // mostrar sección
    const seccion = document.getElementById(categoria);
    if (seccion) {
        seccion.style.display = "block";
    }

    // reproducir audio de categoría
    reproducirAudioCategoria(categoria);

    // manejar clase activa del menú superior
    document.querySelectorAll(".menu-tab").forEach(btn => {
        btn.classList.remove("active");
    });

    evento.currentTarget.classList.add("active");
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

    document.querySelectorAll(".menu-tab").forEach(btn => {
        btn.classList.remove("active");
    });
}

/* ===== AUDIO DE CATEGORÍAS ===== */
function reproducirAudioCategoria(categoria) {
    const audios = {
        comunicacion: document.getElementById("audioComunicacion"),
        escolar: document.getElementById("audioEscolar"),
        personales: document.getElementById("audioPersonales")
    };

    if (audios[categoria]) {
        audios[categoria].currentTime = 0;
        audios[categoria].play();
    }
}

/* ===== AUDIO DE BIENVENIDA ===== */
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