function saludar() {
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenida/o a Tu Tienda Online " + nombre)
}
saludar()

const PAQUETE = [],
    VUELO = [
    { nombre: "Miami", precio: 150000},
    { nombre: "Londres", precio: 200000},
    { nombre: "Toronto", precio: 190000},
    ],
    HOSPEDAJE = [
    { nombre: "Hotel 5 estrellas (x noche)", precio: 150000 },
    { nombre: "Departamento (x noche)", precio : 75000},
    { nombre: "Hostel (x noche)", precio: 50000},
    ],
    TRANSLADO = [
    { nombre: "Auto Privado", precio: 20000},
    { nombre: "Micro Compartido", precio : 10000},
    { nombre: "Metro",precio: 2000},
    ],
    ASISTENCIA = [
    { nombre: "Asistencia Plata plus", precio: 4998 },
    { nombre: "Asistencia Oro plus ", precio: 6725 },
    { nombre: "Asistencia Diamente plus", precio: 8692 },
    ],
    NINGUNO = [{ nombre: "No se eligio", precio: 0 }]
/* Funcion para consultar el menu al usuario */
const consultar = (mensaje) => {
    dato = parseInt(prompt(mensaje))
    while (dato <= -1 || dato >= 4 || isNaN(dato)) {
    alert("Por favor ingrese una opcion correcta")
    dato = parseInt(prompt(mensaje))
    }
    return dato
}
/* funcion que devuelve el resultado del total propiana y el menu elegido */
const menu = (menu) => {
    let respuesta,
    precios = menu.map((nombre) => nombre.precio),
    total = precios.reduce((a, b) => a + b, 0)

    respuesta =
    "\n Usted eligio : " +
    "\n Vuelo : " +
    menu[0].nombre +
    " $" +
    menu[0].precio +
    "\n Hospedaje : " +
    menu[1].nombre +
    " $" +
    menu[1].precio +
    "\n Translado : " +
    menu[2].nombre +
    " $" +
    menu[2].precio +
    "\n Asistencia : " +
    menu[3].nombre +
    " $" +
    menu[3].precio +
    "\n Total del viaje : $" +
    total 

    return respuesta
}
/* Funcion para validar la opcion elegida */
validacion = (valor, array) => {
    if (valor != 3) {
    PAQUETE.push({
            nombre: array[valor].nombre,
            precio: array[valor].precio,
    });
    } else {
    PAQUETE.push({
            nombre: NINGUNO[0].nombre,
            precio: NINGUNO[0].precio,
    })
    }
};
/* mensajes para preguntar el menu */
let mensajeVuelo ="Elija un destino \n 0. Miami \n 1. Londres \n 2. Toronto"

let mensajeHospedaje ="Elija un hospedaje \n 0. Hotel 5 Estrellas \n 1. Departamento \n 2. Hostel \n 3. Ninguno"

let mensajeTranslado ="Elija un translado \n 0. Auto Privado \n 1. Combi compartida \n 2. Metro \n 3. Ninguno"

let mensajeAsistencia ="Elija una asistencia: \n 0. Asistencia Plata Plus \n 1. Asistencia Oro Plus \n 2. Asistencia Diamante Plus \n 3. Ninguno"

/*Se se llaman a todas las funciones definidas */
let vuelo = consultar(mensajeVuelo)

validacion(vuelo, VUELO)

let hospedaje = consultar(mensajeHospedaje)

validacion(hospedaje, HOSPEDAJE)

let translado = consultar(mensajeTranslado)

validacion(translado, TRANSLADO)

let asistencia = consultar(mensajeAsistencia)

validacion(asistencia, ASISTENCIA)

alert(menu(PAQUETE))