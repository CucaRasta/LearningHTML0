

//TIPOS DE DATOS

    //  NUMERICO 

    var edad=19*3;

    //  STRING = Cadena de texto

    var nombre = "carlos";
    var apellido = "espereme";
    //document.write(nombre + " " + apellido);

    //  ARRAY = Arreglo -almacena muchos valores en forma de lista

    var amigos = ["carlos","alejandro","cesar"];// empiezan desde 0 ,1,2
    document.write(amigos[2]);//accedemos a ellos en especifico

    //  OBJECT = Objeto - un diccionario de datos

    var Objeto = {
        color:"black",
        size: 12
    }

    //  BOOLEAN = F / V - 1/0 - ES LOGICO Y SOLO MUESTRA ESTOS 2 VALORES

    var boleano = false;

    //  UNDEFINED

    var cucarasta;
    document.write(cucarasta); //no esta definido el dato


    //  NULL  cuando tenemos una variable con un dato
    //y luego mas adelante le queremos borrar el dato seria asi:

    var numero2 = 10;
    var numero2 =null;  //aqui ya le borramos el dato a la variable

    //  NaN  - valor invalido

    var texto2 = "hola mija";
    document.write(texto2 * 2); // NO SE PUEDE MULTIPLICAR UNA CADENA DE TEXTO

