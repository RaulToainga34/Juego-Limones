let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=30;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTURA_LIMON=20;
const ANCHO_LIMON=20;

let personajeX = canvas.width/2;
let limonX=0;
let limonY=0;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


function dibujarSuelo(){
    ctx.fillStyle = "#B52121";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#20bf5a";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function dibujarLimon(){
    ctx.fillStyle = "#fbff04";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function moverIzquierda(){
    personajeX = personajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX = personajeX+10;
    actualizarPantalla();
}

function bajarLimon(){
    limonY = limonY+10
    actualizarPantalla();
}