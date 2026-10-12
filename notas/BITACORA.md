# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla     | Se mantiene al recargar (Si/No) |
| ---------------------------- | ----------------------------- | ------------------------------- |
| textContent desde la consola | El titulo                     | no                              |
| textContent desde app.js     | Cambia el titulo y color      | Si                              |
| style.color                  | El color                      | Si                              |
| classList.add                | destaca el texto seleccionado | si                              |
| createElement + appendChild  | Cambia                        | no                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara           | Cuanto suma por accion |
| -------------- | ------------------------------- | ---------------------- |
| click          | hacer click 1 vez               | 1                      |
| dblclick       | al hacer click 2 veces seguidas | 1                      |
| mouseover      | al pasar el mouse               | 1                      |

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla     | Se recargo la pagina (Si/No) |
| --------------------------------------- | --------------------------- | ---------------------------- |
| Escribir en el campo nombre             | Muesra el nombre            | no                           |
| Enviar sin preventDefault               | Se muestra por milisegundos | si                           |
| Enviar con preventDefault, correo sin @ | muestra error               | no                           |
| Enviar con preventDefault, correo con @ | muestra enviado             | no                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion() | conDescuento(0.25) |
| ------- | ------- | ------ | ------------- | ------------------ |
| laptop  | Laptop  | 2500   | -             | 625                |
| mouse   | Mouse   | 45     | -             | 33.75              |
| teclado | Teclado | 120    | -             | 30                 |
| monitor | Monitor | 400    | -             | 100                |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina | Correcto (Si/No) |
| --------------- | --------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                       | si               |
| + Lapicero 3.20 | 15.70                       | si               |
| + Mochila 89.90 | 105.60                      | si               |
| Sin Number()    | no muestra                  | -                |
