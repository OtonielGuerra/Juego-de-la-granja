var canvas = document.getElementById('Fondo');
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/llave.png',
    imagen: Imagen
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",function*(){
   dibujar(); 
});

function dibujar(){
    lapiz.drawImage(fondo.imagen,0,0);
}

