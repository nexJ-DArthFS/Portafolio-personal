async function cargarDatos() {

    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!respuesta.ok) {
            throw new Error("Error en la API");
        }

        const usuario = await respuesta.json();

        console.log(usuario);

    } catch (error) {
        console.error(error);
    }
}

cargarDatos();

// ============================================================
// PORTAFOLIO PERSONAL
// Archivo: index.js
// Autor: Juan Daniel Falcones Suango
// ============================================================


// ============================================================
// 1. MENSAJE INICIAL
// ============================================================

// Este mensaje aparece en la consola del navegador.
// Sirve para comprobar que JavaScript está conectado correctamente.

console.log("Portafolio cargado correctamente.");


// ============================================================
// 2. NAVEGACIÓN SUAVE
// ============================================================

// Buscamos todos los enlaces que comienzan con "#"
// Por ejemplo: #sobre-mi, #proyectos, #contacto.

const enlaces = document.querySelectorAll('a[href^="#"]');


// Recorremos cada enlace.

enlaces.forEach(function (enlace) {

    // Escuchamos el evento "click".

    enlace.addEventListener("click", function (evento) {

        // Evitamos el comportamiento normal del enlace.
        // Así pipodemos controlar nosotros el desplazamiento.

        evento.preventDefault();


        // Obtenemos el ID del elemento al que queremos ir.
        // Ejemplo:
        // href="#proyectos"
        // obtiene "proyectos".

        const id = enlace.getAttribute("href");


        // Buscamos la sección correspondiente.

        const seccion = document.querySelector(id);


        // Si la sección existe, hacemos desplazamiento suave.

        if (seccion) {

            seccion.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ============================================================
// 3. ANIMACIÓN DE LAS HABILIDADES
// ============================================================

// Buscamos todas las barras de progreso.

const barras = document.querySelectorAll(".progress");


// Recorremos cada barra.

barras.forEach(function (barra) {

    // Guardamos el ancho original.
    // Ejemplo: "70%".

    const ancho = barra.style.width;


    // Primero colocamos la barra en 0%.
    // Esto permitirá crear una animación.

    barra.style.width = "0%";


    // Esperamos un pequeño momento antes de animarla.

    setTimeout(function () {

        barra.style.transition = "width 1.5s ease";

        barra.style.width = ancho;

    }, 300);

});


// ============================================================
// 4. CONTADOR DE PROYECTOS
// ============================================================

// Buscamos todos los elementos que tienen la clase "project".

const proyectos = document.querySelectorAll(".project");


// Obtenemos la cantidad de proyectos.

const cantidadProyectos = proyectos.length;


// Mostramos la cantidad en consola.

console.log("Cantidad de proyectos:", cantidadProyectos);


// Creamos un pequeño elemento para mostrar el contador.

const contador = document.createElement("p");

contador.textContent = `Actualmente tengo ${cantidadProyectos} proyectos registrados.`;

contador.classList.add("contador-proyectos");


// Buscamos la sección de proyectos.

const seccionProyectos = document.querySelector("#proyectos");


// Insertamos el contador después del título.

const tituloProyectos = seccionProyectos.querySelector("h2");

tituloProyectos.insertAdjacentElement("afterend", contador);


// ============================================================
// 5. INTERACCIÓN CON LOS PROYECTOS
// ============================================================

// Obtenemos todos los elementos <details>.
// Estos elementos ya existen en tu HTML.

const detallesProyectos = document.querySelectorAll(".project details");


// Recorremos cada proyecto.

detallesProyectos.forEach(function (detalle) {

    // Detectamos cuando el usuario abre o cierra el proyecto.

    detalle.addEventListener("toggle", function () {

        if (detalle.open) {

            console.log("Proyecto abierto.");

        } else {

            console.log("Proyecto cerrado.");

        }

    });

});




// ============================================================
// 7. MODO OSCURO
// ============================================================

// Creamos un botón mediante JavaScript.
// No necesitamos escribirlo manualmente en HTML.

const botonTema = document.createElement("button");

botonTema.textContent = "🌙 Modo oscuro";


// Añadimos el botón al header.

const header = document.querySelector("header");

header.appendChild(botonTema);


// Cuando el usuario presione el botón...

botonTema.addEventListener("click", function () {

    // Añadimos o quitamos la clase "tema-oscuro".

    document.body.classList.toggle("tema-oscuro");


    // Comprobamos si el modo oscuro está activo.

    const oscuroActivo =
        document.body.classList.contains("tema-oscuro");


    // Cambiamos el texto del botón.

    if (oscuroActivo) {

        botonTema.textContent = "☀️ Modo claro";

    } else {

        botonTema.textContent = "🌙 Modo oscuro";

    }

});


// ============================================================
// 8. DETECCIÓN DEL TEMA ACTUAL
// ============================================================

// Mostramos en consola el tema que tiene actualmente el body.

console.log(
    "Modo oscuro:",
    document.body.classList.contains("tema-oscuro")
);


// ============================================================
// 9. INFORMACIÓN DEL PORTAFOLIO
// ============================================================

// Podemos almacenar información utilizando un objeto.
// Esto es importante porque posteriormente podemos utilizar
// estos datos para construir elementos dinámicamente.

const portafolio = {

    nombre: "Juan Daniel Falcones Suango",

    profesion: "Desarrollador web",

    año: 2026,

    tecnologias: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git"
    ]

};


// Mostramos el objeto completo en consola.

console.log("Información del portafolio:", portafolio);


// ============================================================
// 10. RECORRER LAS TECNOLOGÍAS
// ============================================================

// Recorremos el array de tecnologías utilizando forEach().

portafolio.tecnologias.forEach(function (tecnologia) {

    console.log("Tecnología:", tecnologia);

});


// ============================================================
// 11. MENSAJE FINAL
// ============================================================

console.log("JavaScript está funcionando correctamente.");


