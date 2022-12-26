var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
}

dibujarCirculo(300, 200, 20, "Red");
dibujarCirculo(340, 200, 20, "black");
dibujarCirculo(300, 240, 20, "blue");
dibujarCirculo(300, 160, 20, "Yellow");
dibujarCirculo(260, 200, 20, "Orange");
