function sorteoNumerico() {
  //start

  /*Aquí tenemos una función que nos permitirá saltar linea una vez en nuestra app de consola.*/
  /*para poder crear una función untilizamos la siguente sintaxis: funtion nombreDeFuncion (Parametros){Aquí va el codigo}*/
  function saltarLinea() {
    document.write("<br>");
  }

  function imprimir(frase) {
    document.write(frase);
    saltarLinea();
  }

  function sortearNumero() {
    return Math.round(Math.random() * 10);
  }

  var numeroPensado = sortearNumero();

  var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10: "));

  if (numeroLanzado == numeroPensado) {
    imprimir("Uau! Vos acertaste, pues yo pensé en el número " + numeroPensado);
  } else {
    imprimir("¡Se acabó, vos erraste!");
  }
} //fin

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
// xywh
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 800, 600);
//azul
pincel.fillStyle = "#042D62";
pincel.fillRect(0, 0, 350, 250);
//rojo
pincel.fillStyle = "#CC0D24";
pincel.fillRect(0, 350, 350, 250);

pincel.fillStyle = "#CC0D24";
pincel.fillRect(450, 0, 350, 250);

pincel.fillStyle = "#042D62";
pincel.fillRect(450, 350, 350, 250);
