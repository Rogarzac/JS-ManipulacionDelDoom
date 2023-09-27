/*
DOM (Document Object Model/ Modelo de Objetos del Docuemento)

Cuando creamos paginas que usan html + CSS estamos creando paginas estaticas (porque no tienen interactividad), cuando agregamos JS, neustras paginas se convierten en sitios dinamicos (tienen interactividad).

El navegador lee el docuemnto html ade arriba a abajo, de izquiera a derecha (renderizacion)

Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc

Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM, y entendemos que se representa como un arbol con ramas y hojas, entendemos que cada uno de estas ramas y hojas es un nodo.

Que es un nodo?
Representacion mas basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    -Document: Nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.
    
    -Element: Son nodos definidos por etiquetas html (div, h1, p, img, meta, head, script, etc). ya sea que se vean o no se vean (etiquetas que interpreta el navegador)

    -text: el texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.

    -Atributos: los atributos de las etiquetas tambien se convierten en nodos. Son nodoso que estan asociados a un elemento y se pueden considerar tambien nodos hijos

    -Comment: los comentarios tambien son un nodo. porque forma parte del documento.

    ¿Para que utilizamos JS en un DOM?
        -Agregar elementos HTML
        -Modificar elementos HTML
        -Borrar elementos HTML


///Comenzamos a trabajar con los nodos de mi documento html
///1. Guardar los elementos HTML en variables de JS (let, Var, const)
//// MEtodos de seleccion de elmentos: permiten traer una etiqueta html y guardarla para su uso posterior.

-----MEtodos tradicionales
    -getElementByID (trae un elmento por ID)
    -getElementByTagName
    -getElementsByClassName

*/
//Aqui obtengo un elemento por id
let nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);



//aqui obtengo varios elementos pro clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);



//Aqui obtengo varios elementos por etiqueta 
const inputs = document.getElementsByTagName("input");
console.log(inputs);

/* metodos actuales

la unica diferencia entre el queryselectro y el getelement es que tenemos que especificar el tipo de selectro que usaremos ). para las clases, # para los id)
    -document.querySelectro
    -document.querySelectroALL

*/
//Aqui obtengo un elemento por el selectro #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);


//Aqui obtengo varios elementos por el selector.
let containers = document.querySelectorAll(".container");
console.log(containers);

/*
Metodos para modificar elementos en su texto

    -innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)

    -textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto. (crear un texto nuevo)
    
*/

////Modificando un texto h1 con un innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "nuevo texto de mi titulo";




//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de confirmacion</p>"


/*

Crear elementos 
    - Crear el elemento 
        -createElement
        -createTextNode
        -createComment



    - Poner el elemento
        -append
        -appendChild

*/

///Creando un elemento con createElement/////////////////////////////////////////////////////////////////////////////////////

let imagen = document.createElement("img");
///Crear los atributos de un elemento
imagen.src ="https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "foto de perrito feliz";

//poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);