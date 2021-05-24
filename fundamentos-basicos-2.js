//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function ReemplazaPosBig(Array){
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] > 0){
            Array[i] = "big";
        }
        }
        return Array;
    }

//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function MenorMayor(Array){
    let MaxActual = Array[0];
    let MinActual = Array[0];
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length; j++) {
            if(Array[j] > Array[i]){
            MaxActual = Array[j];
            }
        }
        }
        for (let x = 0; x < Array.length; x++) {
            for (let y = 0; y < Array.length; y++) {
            if(Array[y] < Array[x]){
            MinActual = Array[y];
            }
        }
        }
        console.log(MinActual);
        return MaxActual;
    }

//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function PenPrintRetImp(Array){
    if(Array.length >= 2){
        console.log(Array[Array.length-2]);
        }
        else{
        console.log(Array[0]);
        }
        
        for (let i = 0; i < Array.length; i++) {
        if(Array[i] % 2 == 1){
            return Array[i];
        }
        }
    }

//Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function Doble(Array){
    let ArrayNuevo = [];
    for (let i = 0; i < Array.length; i++) {
      ArrayNuevo.push(Array[i] * 2);
    }
    return ArrayNuevo;
    }

//Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function ContarPositivos(Array){
    let Contador = 0;
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] > 0){
            Contador++;
        }
        }
        Array[Array.length - 1] = Contador;
        return Array;
    }

//Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function TresSeguidos(Array){
    let Contador = 0;
        for (let i = 0; i < Array.length; i++) {
        if(Array[i] % 2 == 0){
            if(Contador >= 0){
            Contador++;
            }
            else{
            Contador = 0;
            Contador++;
            }
        }
        else{
            if(Contador <= 0){
            Contador--;
            }
            else{
            Contador = 0;
            Contador--;
            }
        }
        if(Contador == 3){
            console.log("¡Es para bien!");
            Contador = 0;
        }
        else if(Contador == -3){
            console.log("¡Qué imparcial!");
            Contador = 0;
        }
        }
    }

//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function LongitudesPrevias(Array){

    for (let i = Array.length - 1; i > 0; i--) {

        Array[i] = String(Array[i-1]).length;

    }

    return Array;

}
//var Array = ["Prueba","Hola","Orion","Tres"];
//console.log(LongitudesPrevias(Array));


//Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function AgregaSiete(Array){
    let ArrayNuevo = [];
    for (var i = 0; i < Array.length; i++) {
        ArrayNuevo.push(Array[i] + 7);
    }
    return ArrayNuevo;
}
//var Array = [3,1,2,5,-12];
//console.log(Array);
//console.log(AgregaSiete(Array));

//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function ArrayInverso(Array){
    let temp = 0;
    for (let i = 0; i < Array.length / 2; i++) {
        temp = Array[i];
        Array[i] = Array[Array.length - i - 1];
        Array[Array.length - i - 1] = temp;
    }
    return Array;
}
//var Array = [3,1,2,5,-12];
//console.log(Array);
//console.log(ArrayInverso(Array));

//Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function PerspectivaNegativa(Array){
    let ArrayNuevo = [];
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] >= 0){
          ArrayNuevo.push(Array[i] * -1);
        }
        else{
            ArrayNuevo.push(Array[i]);
        }
    }
    return ArrayNuevo;
}
//var Array = [3,1,-2,5,-12];
//console.log(Array);
//console.log(PerspectivaNegativa(Array))

//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function SiempreHambriento(Array){
    let Verificacion = false;
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] == "comida"){
            console.log("Yummy");
            Verificacion = true;
        }
    }
    if(!Verificacion){
        console.log("Tengo hambre.");
    }
}
//var Array = ["prueba","hola","chau"];
//SiempreHambriento(Array);

//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function CambiarHaciaElCentro(Array){
    let temp = 0;
    for (let i = 0; i < Array.length / 2; i++) {
        if(i % 2 == 0){
            temp = Array[i];
            Array[i] = Array[Array.length - 1 - i];
            Array[Array.length - 1 - i] = temp;
        }
    }
    console.log(Array);
}
//var Array = [4, -15 , -2 , "perro", 7, "cuaderno", "casa"];
//console.log(Array);
//CambiarHaciaElCentro(Array);

//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function EscalaArray(Array,X){
    for (let i = 0; i < Array.length; i++) {
        Array[i] *= X;
    }
    return Array;
}

    // var Array = [1 , -2, 13, 2 , 9];
    // console.log(Array);
    // var X = 3;
    // console.log("Multiplicado por: ",X);
    // console.log(EscalaArray(Array,X));

//