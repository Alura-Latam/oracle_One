let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "#241f31";
pincel.fillRect(0, 0, 600, 400); //cabeza             X,Y,W,H

pincel.fillStyle = "darkgreen";
pincel.fillRect(125, 50, 350, 300); //cabeza

pincel.fillStyle = "black";
pincel.fillRect(175, 125, 90, 90); //OJO uNO

pincel.fillStyle = "black";
pincel.fillRect(337, 125, 90, 90); //oJO dOS

pincel.fillStyle = "black";
pincel.fillRect(266, 215, 70, 100); //Nariz

pincel.fillStyle = "black";
pincel.fillRect(227, 270, 40, 110); //Boca

pincel.fillStyle = "black";
pincel.fillRect(336, 270, 40, 110); //Boca
