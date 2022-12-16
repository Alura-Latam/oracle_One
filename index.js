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

        return Math.round(Math.random() * 100);
    }   

    var numeroPensado = sortearNumero();

    var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10: "));

    if(numeroLanzado  == numeroPensado) {

        imprimir("Uau! Vos acertaste, pues yo pensé en el número " + numeroPensado);
    } else {

        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
        imprimir("¡Se acabó, vos erraste!");
    }
