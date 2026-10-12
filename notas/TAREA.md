# Tarea: Mi componente interactivo

## Componente elegido

Elegí crear una lista de tareas donde el usuario puede agregar, buscar y eliminar tareas. También puede ver cuántas tareas tiene registradas.

## Version 1: solo DOM

**Qué agregué:** Una lista que muestra una tarea usando JavaScript.

**Por qué:** Para aprender a crear elementos HTML desde JavaScript.

**Qué cambió:** Ahora aparece una tarea en la página automáticamente.

```js
const lista = document.querySelector("#lista");
const nuevo = document.createElement("li");

nuevo.textContent = "Estudiar JavaScript";
lista.appendChild(nuevo);
```

## Version 2: con eventos

**Qué agregué:** Un formulario para agregar tareas.

**Por qué:** Para que el usuario pueda interactuar con la página.

**Qué cambió:** Ahora el usuario puede escribir y agregar sus propias tareas.

```js
const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#tarea");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevo = document.createElement("li");
  nuevo.textContent = entrada.value;

  lista.appendChild(nuevo);
  entrada.value = "";
});
```

## Version 3: con clases y objetos

**Qué agregué:** Una clase Tarea, un buscador, botones para eliminar, un contador y una validación.

**Por qué:** Para organizar mejor los datos y agregar más funciones.

**Qué cambió:** Ahora puedo agregar, buscar y eliminar tareas. También se muestra un mensaje cuando intento agregar una tarea vacía.

```js
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

const nueva = new Tarea("Estudiar", "12/10/2026");

console.log(nueva.mostrar());
console.log(nueva.coincide("Est"));
```

El código completo está en `tarea/app.js`.

## Donde uso DOM, eventos y objetos

| Concepto   | Parte del código                           |
| ---------- | ------------------------------------------ |
| DOM        | querySelector() para seleccionar elementos |
| DOM        | createElement() para crear tareas          |
| DOM        | appendChild() para agregar tareas          |
| DOM        | textContent para mostrar información       |
| Eventos    | submit para agregar tareas                 |
| Eventos    | click para eliminar tareas                 |
| Eventos    | input para buscar tareas                   |
| Objetos    | Clase Tarea con nombre y fecha             |
| Objetos    | Métodos mostrar() y coincide()             |
| Validación | Comprueba que el campo no esté vacío       |

## Pruebas realizadas

| Acción              | Resultado esperado       | Resultado obtenido | ¿Cumple?  |
| ------------------- | ------------------------ | ------------------ | --------- |
| Agregar "Estudiar"  | Aparece en la lista      | Pendiente          | Pendiente |
| Agregar tarea vacía | Muestra mensaje de error | Pendiente          | Pendiente |
| Buscar "Estudiar"   | Muestra la tarea buscada | Pendiente          | Pendiente |
| Eliminar una tarea  | Desaparece de la lista   | Pendiente          | Pendiente |
| Agregar dos tareas  | El contador muestra 2    | Pendiente          | Pendiente |

## Por que diseñe asi mi clase

Diseñé la clase Tarea con los atributos nombre y fecha porque necesito guardar el nombre de cada tarea y cuándo fue creada. El método mostrar() sirve para mostrar su información y coincide() permite buscar tareas por su nombre. Así el código queda más organizado y fácil de entender.
