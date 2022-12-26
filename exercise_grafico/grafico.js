function dibujarRectangulo(x, y, base, altura, color) {
  let pantalla = document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, base, altura);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, base, altura);
}

function escribirTexto(x, y, texto) {
  let pantalla = document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");

  pincel.font = "15px Georgia";
  pincel.fillStyle = "black";
  pincel.fillText(texto, x, y);
}

//Aquí viene el texto faltante
dibujarRectangulo(50, 50, 20, "blue");
