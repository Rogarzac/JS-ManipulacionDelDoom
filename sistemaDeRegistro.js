/* Sistema para registrar pacientes y mostratlos en tarjetas */


///Primer paso: obtener todos los elementos de nuestra HTML y guardarlos en varaibles de JS

///Inputs separados, boton, textoConfrimacion

let nombrePaciente = document.getElementById("nombrePaciente"); ///input nombre
let edadPaciente = document.getElementById("edadPaciente");  ///input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente"); ///boton
let textoConfrimacion = document.getElementById("textoConfirmacion"); ////container mensaje confirmacion



///Array para almacenar a mis pacientes
let pacientes = [];

//Funcion para registrar un nuevo paciente
function registrarPaciente(){
    ///Obtengo el atributo value de mi input 
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    ///Array para guardar la informacion del paciente 
    let paciente = {
        nombre: valorNombrePaciente, // tomo el valor del input y lo asigno a esta variable
        edad: valorEdadPaciente, //tomo el valor del input, y lo asigno a esta variable
        citas: []
    }
    ////Cuando tengo la informacion del paciente 
    pacientes.push(paciente); ///array.push (valorAAgregar)

    mostrarInfoPaciente(paciente); /// invocacion de ontra funcion

    ////Mensaje de confirmacion (textContent)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente"

    generarTarjetaPaciente(paciente); ///invocacion de una funcion para generar tarjetas

    return paciente;
} ///Aqui termina mi funcion registrarPaciente



// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}///aqui termina mi funcion mostrarInfoPaciente



///Funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){
    ///crear
    tarjetaDiv.className = "col-sm-12 col-md-6 col-lg-4"; //aqui le especifico que es una columna
let tarjetaDiv = document.createElement("div"); //aqui cro un container para mi tarjeta
tarjetaDiv.className = "col"; ///aqui le especifico que es una columna

//Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`

    ///poner
    contenedorTarjetas.appendChild(tarjetaDiv);
}///cierra funcion crearTarjeta

//evento
botonRegistrarPaciente.addEventListener("click", registrarPaciente);


