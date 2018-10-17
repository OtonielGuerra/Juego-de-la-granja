var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

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

fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();

fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

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

function dibujar(){
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOK == true){
        lapiz.drawImage(vaca.imagen,150,100);
    }
    if(cerdo.cargaOK == true){
        lapiz.drawImage(cerdo.imagen,200,200);
    } 
    if(cuchillo.cargaOK == true){
        lapiz.drawImage(cuchillo.imagen,200,300);
    }
    
    
}

