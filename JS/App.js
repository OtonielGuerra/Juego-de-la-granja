var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

var vaca = {
    url: './imagenes/vaca.png',
    image: Image
}

var fondo = {
    url: './imagenes/tile.png',
    image: Image
};

var cerdo = {
    url: './imagenes/cerdo.png',
    image: Image
};

fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();

fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;

fondo.imagen.addEventListener("load",function(){
    lapiz.drawImage(fondo.imagen,0,0);
});

vaca.imagen.addEventListener("load",function(){
    lapiz.drawImage(vaca.imagen,150,100);
});

cerdo.imagen.addEventListener("load",function(){
    lapiz.drawImage(cerdo.imagen,200,200);
});

function dibujar(){
    lapiz.drawImage(fondo.imagen,0,0);
    lapiz.drawImage(vaca.imagen,150,100);
    lapiz.drawImage(cerdo.imagen,200,200);
}

