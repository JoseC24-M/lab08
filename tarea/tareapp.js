// Clase propia
class Tarea {
  constructor(nombre, fecha) {
    this.nombre = nombre;
    this.fecha = fecha;
  }

  mostrar() {
    return this.nombre + " - " + this.fecha;
  }

  coincide(texto) {
    return this.nombre.toLowerCase().includes(texto.toLowerCase());
  }
}

// Seleccionar elementos
const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const buscar = document.querySelector("#buscar");
const contador = document.querySelector("#contador");

let tareas = [];

// Mostrar tareas
function mostrarTareas() {
  lista.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    if (tarea.coincide(buscar.value)) {
      const li = document.createElement("li");
      li.textContent = tarea.mostrar() + " ";

      const boton = document.createElement("button");
      boton.textContent = "Eliminar";

      boton.addEventListener("click", () => {
        tareas.splice(indice, 1);
        mostrarTareas();
      });

      li.appendChild(boton);
      lista.appendChild(li);
    }
  });

  contador.textContent = "Total: " + tareas.length;
}

// Evento submit
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = entrada.value.trim();

  if (nombre === "") {
    mensaje.textContent = "Debes escribir una tarea";
    return;
  }

  const fecha = new Date().toLocaleDateString();
  const nueva = new Tarea(nombre, fecha);

  tareas.push(nueva);
  entrada.value = "";
  mensaje.textContent = "Tarea agregada";

  mostrarTareas();
});

// Evento input
buscar.addEventListener("input", mostrarTareas);
