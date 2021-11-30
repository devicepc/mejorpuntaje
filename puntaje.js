    
function borrdataInp(){
    document.getElementById("puntos").innerHTML = "";
    document.getElementById("nombre").innerHTML = ("");
    console.log("borra?");
}

var baseDatos=[];
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
}


function limpiar(){
 document.getElementById("nombre").value ="";
 document.getElementById("puntos").value ="";
   
}

