let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=30;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

function dibujarSuelo(){
    ctx.fillStyle = "#B52121";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#20bf5a";
    ctx.fillRect(canvas.width/2,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}