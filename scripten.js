/* const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Que tecnologias de discos es mas nueva?",
    respuestas: {
      a: "SCSI",
      b: "SATA",
      c: "IDE",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Cual tecnologia es la actual en memorias RAM?",
    respuestas: {
      a: "DDR",
      b: "DDR3",
      c: "DDR4",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Las redes cableadas de una lan tienen :",
    respuestas: {
      a: "3G",
      b: "LI-FI",
      c: "WIFI",
      d: "UTP",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. Requisitos de intalacion de Ubuntu 20.04.3 LTS?",
    respuestas: {
      a: "2 GHz dual core processor or better, 4 GB system memory, 25 GB of free hard drive space",
      b: "1 GHz processor or better, 2 GB system memory, 32 GB of free hard drive space",
      c: "1.5 GHz processor or better, 4 GB system memory, 200 MB of free hard drive space",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Que herramienta usa para ver Info de su PC con Win 10?",
    respuestas: {
      a: "Services.msc",
      b: "Gpedit",
      c: "Dxdiag",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. Si el Pc esta lento puede descargar mas RAM?",
    respuestas: {
      a: "SI",
      b: "Solo si soy Admin",
      c: "No, la RAM es hardware, se agrega abreindo el PC",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. De donde consigue la PC la correinte para funcionar ?",
    respuestas: {
      a: "Disco duro",
      b: "Fuente del PC",
      c: "RAM",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Ejecuta las instuciones, las secuencias y procesa datos : ",
    respuestas: {
      a: "Placa madre",
      b: "CPU",
      c: "Tarjeta de Red",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. Cuál es la memoria principal?",
    respuestas: {
      a: "RAM",
      b: "De corto plazo",
      c: "Temporal",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Indique cual es hardware?",
    respuestas: {
      a: "Programas",
      b: "Tarjeta de sonido",
      c: "Sistema Operativo",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label> <br>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div><br>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();
// prueba valor gral respuestas correctas
respuestasCorrectas =0;

// 
function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  // let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;
      respuestasCorrectasPunt = respuestasCorrectas;
      

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
    // prueba imprecion
    console.log("las respuestas correctas?: "+respuestasCorrectasPunt);
    savePuntos();
}

botonRes.addEventListener("click", mostrarResultado);

// guardar datos 

var baseDatos=[{nombre:"jhon", puntosCapturados:"10"}];
function capturar(){
function Persona(nombre, puntos){
    this.nombre = nombre;
    this.puntos = puntos;
     
}
var nombreCapturado = document.getElementById("nombre").value;
var puntosCapturados = document.getElementById("puntos").value;
  nuevoPersona = new Persona (nombreCapturado, puntosCapturados);


 baseDatos.push(nuevoPersona);

baseDatos.sort((b,a) => {

return a.puntos-b.puntos;
});

guardarData();
}


function guardarData(){
let tabla=document.getElementById("tabla").getElementsByTagName('tbody')[0]; 

 tabla.innerHTML='';
 baseDatos.forEach(arr=>{

tabla.innerHTML+= '<td class="td">'+arr.nombre+' </td><td class="td">'+arr.puntos+'</td>';
//console.log("la base de datos con : "+arr.nombre + " puntos : " +arr.puntos);

 })
 

}

function cosas(){
    capturar();
    limpiar();
    ExecuteScriptSave();
}


function limpiar(){
 document.getElementById("nombre").value ="";
 document.getElementById("puntos").value ="";
   
}

Namegarmer ="";
// guardar nombre de jugador
function saveName(){
  var nameJugador = prompt("Para emprzar el juego pon tu nombre");
  document.getElementById("NameGame3r").innerHTML = "";
 
  Namegarmer = nameJugador;
  var anonimo = "Anonimo"
  if (nameJugador == ""){
    document.getElementById("nombre").value = anonimo;
    document.getElementById("NameGame2r").innerHTML = ("Bienvedido :"+anonimo);
  
  console.log("Bienvenido "+anonimo);
  ExecuteScript();
  }else if (nameJugador !==""){
    document.getElementById("nombre").value = Namegarmer;
  document.getElementById("NameGame2r").innerHTML = ("Bienvedido :"+Namegarmer);
  
  console.log("Biebenido "+Namegarmer);
  ExecuteScript();
}
}

function savePuntos(){
    document.getElementById("puntos").value = respuestasCorrectasPunt;
    
    
    console.log("savedata");
    console.log(respuestasCorrectasPunt);
}



function ExecuteScript() {
  var elmnt = document.getElementById("body");
  elmnt.scrollLeft += 0;
  elmnt.scrollTop += 0;
  console.log("execScript");
  }

  
function ExecuteScriptSave() {
  var elmnt = document.getElementById("body");
  elmnt.scrollLeft += 50;
  elmnt.scrollTop += 1500;
  console.log("gasd");
}
 */


// juego en Ingles

const contenedor = document.getElementById("test");
const botonResEng = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. What disc technologies is newer??",
    respuestas: {
      a: "SCSI",
      b: "SATA",
      c: "IDE",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Which technology is the current one in RAM memories?",
    respuestas: {
      a: "DDR",
      b: "DDR3",
      c: "DDR4",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. The wired networks of a lan have : ",
    respuestas: {
      a: "3G",
      b: "LI-FI",
      c: "WIFI",
      d: "UTP",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. Ubuntu 20.04.3 LTS installation requirements?",
    respuestas: {
      a: "2 GHz dual core processor or better, 4 GB system memory, 25 GB of free hard drive space",
      b: "1 GHz processor or better, 2 GB system memory, 32 GB of free hard drive space",
      c: "1.5 GHz processor or better, 4 GB system memory, 200 MB of free hard drive space",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. What tool do you use to see Info of your PC with Win 10?",
    respuestas: {
      a: "Services.msc",
      b: "Gpedit",
      c: "Dxdiag",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. If the PC is slow you can download more RAM?",
    respuestas: {
      a: "SI",
      b: "Solo si soy Admin",
      c: "No, la RAM es hardware, se agrega abreindo el PC",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. Where does the PC get the power to run? ?",
    respuestas: {
      a: "Disco duro",
      b: "Fuente del PC",
      c: "RAM",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Execute instructions, sequences and process data : ",
    respuestas: {
      a: "Placa madre",
      b: "CPU",
      c: "Tarjeta de Red",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. What is the main memory ?",
    respuestas: {
      a: "RAM",
      b: "De corto plazo",
      c: "Temporal",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Indicate which is hardware?",
    respuestas: {
      a: "Programas",
      b: "Tarjeta de sonido",
      c: "Sistema Operativo",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label> <br>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div><br>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();
// prueba valor gral respuestas correctas
respuestasCorrectas =0;

// 
function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  // let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;
      respuestasCorrectasPunt = respuestasCorrectas;
      

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "You got it right " +
    respuestasCorrectas +
    " questions out of a total of " +
    preguntas.length;
    // prueba imprecion
    console.log("the right answers?: "+respuestasCorrectasPunt);
    console.log("The name : "+Namegarmer);
    savePuntos();
}

botonResEng.addEventListener("click", mostrarResultado);

// guardar datos 

var baseDatos=[{nombre:"jhon", puntosCapturados:"10"}];
function capturar(){
function Persona(nombre, puntos){
    this.nombre = nombre;
    this.puntos = puntos;
     
}
var nombreCapturado = document.getElementById("nombre").value;
var puntosCapturados = document.getElementById("puntos").value;
  nuevoPersona = new Persona (nombreCapturado, puntosCapturados);


 baseDatos.push(nuevoPersona);

baseDatos.sort((b,a) => {

return a.puntos-b.puntos;
});

guardarData();
}


function guardarData(){
let tabla=document.getElementById("tabla").getElementsByTagName('tbody')[0]; 

 tabla.innerHTML='';
 baseDatos.forEach(arr=>{

tabla.innerHTML+= '<td class="td">'+arr.nombre+' </td><td class="td">'+arr.puntos+'</td>';
//console.log("la base de datos con : "+arr.nombre + " puntos : " +arr.puntos);

 })
 

}

function cosas(){
    capturar();
    limpiar();
    ExecuteScriptSave();
}


function limpiar(){
 document.getElementById("nombre").value ="";
 document.getElementById("puntos").value ="";
   
}

Namegarmer ="";
// guardar nombre de jugador
function saveName(){
  var nameJugador = prompt("To start the game put your name");
 
  Namegarmer = nameJugador;
  var anonimo = "Anonimous"
  if (nameJugador == ""){
    document.getElementById("nombre").value = anonimo;
    document.getElementById("NameGame2r").innerHTML = ("Welcome :"+anonimo);
  
  console.log("Welcome "+anonimo);
  ExecuteScript();
  }else if (nameJugador !==""){
    document.getElementById("nombre").value = Namegarmer;
  document.getElementById("NameGame2r").innerHTML = ("Welcome :"+Namegarmer);
  
  console.log("Welcome "+Namegarmer);
  ExecuteScript();
}
}

function savePuntos(){
    document.getElementById("puntos").value = respuestasCorrectasPunt;
    
    
    console.log("savedata");
    console.log(respuestasCorrectasPunt);
}



function ExecuteScript() {
  var elmnt = document.getElementById("body");
  elmnt.scrollLeft += 0;
  elmnt.scrollTop += 0;
  console.log("execScript");
  }

  
function ExecuteScriptSave() {
  var elmnt = document.getElementById("body");
  elmnt.scrollLeft += 50;
  elmnt.scrollTop += 1500;
  console.log("gasd");
}