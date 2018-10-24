//Codigo para el movimiento de las flechas
document.addEventListener("keydown",movimiento);

//Codigo para declarar un espacio del archivo para trabajar
var canvas = document.getElementById('fondo');

//Codigo para declarar que las imagenes son 2d
var lapiz = canvas.getContext('2d');

//codigo para declarar que hay una matriz en todo el archivo
var matriz = new Array(6);

//Una constante que declara que cada espacio de la matriz es de 80
const DIMENSION = 80;

//"X" y "Y" que serviran para poner el cuchillo en 0,0
var x = random(0,5) * DIMENSION;
var y = random(0,5) * DIMENSION;

//Vaca y Cerdo sano
var vacaSana = 1;
var cerdoSano = 1;

//Vidas
var vidas = 3;

//Declarando todas las imagenes y el fondo
var vaca = {
    url: './imagenes/vaca.png',
    image: Image,
    cargaOK: false
}

var fondo = {
    url: './imagenes/tile.png',
    image: Image,
    cargaOK: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    image: Image,
    cargaOK: false
};

var cuchillo = {
    url: './imagenes/cuchillo.jpg',
    image: Image,
    cargaOK: false
};

//Codigo que dice que las imagenes son de tipo Image
fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();

//Declaro que la imagen esta en una ruta especifica
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

//Cargar las imagenes
fondo.imagen.addEventListener("load",function(){
    fondo.cargaOK = true;
    dibujar();
});

vaca.imagen.addEventListener("load",function(){
    vaca.cargaOK = true;
    dibujar();
});

cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOK = true;
    dibujar();
});

cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOK = true;
    dibujar();
});

//Mando a llamar las funciones
iniciarMatriz();
inicializarCerdos();
inicializarVacas();
dibujar();

//Funcion de dibujar el fondo y el cuchillo
function dibujar(){ 
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    };
    dibujarMatriz();
    if(cuchillo.cargaOK == true){
        lapiz.drawImage(cuchillo.imagen,x,y);
    }
};

//Codigo de programacion para las flechas y mover el cuchillo
var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
};

function movimiento(evento){
    switch(evento.keyCode){

        case tecla.LEFT:
            if(x > 0){
                x = x - DIMENSION;
                dibujar();
            }
            break;

        case tecla.UP:
            if(y > 0){
                y = y - DIMENSION;
                dibujar();    
            }
            break;

        case tecla.RIGHT:
            if(x < 400){
                x = x + DIMENSION;
                dibujar();
            }
            break;

        case tecla.DOWN:
            if(y < 400){
                y = y + DIMENSION;
                dibujar();    
            }
            break;
        
        
        //Declaracion de vacas y cerdos buenos y malos
        case tecla.ENTER:
            if(vidas > 0){
                switch(matriz[x/DIMENSION][y/DIMENSION]){

                    case 'v':
                        alert("Vaca Envenenada, te quedan: " + vidas + " vidas");
                        vidas = vidas - 1;
                    break;

                    case  'c':
                        alert("Cerdo Envenenado te quedan: " + vidas + " vidas")
                        vidas = vidas - 1;
                    break;

                    case 'x':
                        alert("Espacio vacio")
                    break;

                    case 'cb':
                        alert("Cerdo Sano")
                    break;

                    case 'vb':
                        alert("Vaca Sana")
                    break;
                }

        break;
        }
        if(vidas == 0){
            alert("Te quedaste sin vidas amigo, perdiste")
        }

            
    }
};

//Funcion que retorna un valor aleatorio
function random(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
};

//Funciones para crear la matriz y que todas sean "x"
function iniciarMatriz(){ 
    for(var i = 0; i < matriz.length; i++){
        matriz[i] = new Array(6);
        for(var j = 0; j < matriz.length; j++){
            matriz[i][j] = 'x';
        }
    }
};

//Codigo para cambiar x por c en la matriz
function inicializarCerdos(){
    var numero = random(2,10);
    for(var i = 1; i <= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x' & cerdoSano == 1){
            matriz[fila][columna] = 'cb';
            cerdoSano = 0;
        }
        if(matriz[fila][columna] == 'x' & cerdoSano == 0){
            matriz[fila][columna] = 'c'
        }
    }
};

//Codigo para cambiar x por v en la matriz
function inicializarVacas(){
    var numero = random(2,10);
    for(var i = 1; i <= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x' & vacaSana == 1){
            matriz[fila][columna] = 'vb';
            vacaSana = 0;
        };
        if(matriz[fila][columna] == 'x' & vacaSana == 0){
            matriz[fila][columna] = 'v';
        };
    }
};

//Codigo para dibujar vacas o cerdos segun la posicion de las "C" o "V"
function dibujarMatriz(){
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'v' || matriz[i][j] == 'vb'){
                lapiz.drawImage(vaca.imagen, i * DIMENSION, j * DIMENSION);
            }
            if (matriz[i][j] == 'c' || matriz[i][j] == 'cb'){
                lapiz.drawImage(cerdo.imagen, i * DIMENSION, j * DIMENSION);
            }
        }
    }
};
    
//Funcion que retorna un valor aleatorio
function random(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
};