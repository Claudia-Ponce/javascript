//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function CrearArray(){
    let Array = [];
    for (let i = 1; i <= 255; i++) {
        Array.push(i);
    }
    return Array;
    }

//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
function SumaPares(){
    let Suma = 0;
    for (let i = 0; i <= 1000; i++) {
        if(i % 2 == 0){
        Suma += i;
        }
    }
    return Suma;
    }

//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function SumaImpares(){
    let Suma = 0;
    for (let i = 0; i <= 5000; i++) {
        if(i % 2 == 1){
            Suma += i;
        }
        }
        return Suma;
    }

//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function SumaArray(Array){
    let Suma = 0;
    for (let i = 0; i < Array.length; i++) {
        Suma += Array[i];
        }
        return Suma;
    }
    
//Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function BuscarMax(Array){
    let MaxActual = Array[0]
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length; j++) {
            if(Array[j]>Array[i]){
            MaxActual = Array[j];
            }
        }
        }
        return MaxActual;
    }

//Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function BuscarProm(Array){
    let Suma = 0;
        for (let i = 0; i < Array.length; i++) {
        Suma += Array[i];
        }
        return Suma/Array.length;
    }

//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function ArrayImpares(Array){
    let ArrayImp = [];
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] % 2 == 1){
            ArrayImp.push(Array[i]);
        }
        }
        return ArrayImp;
    }

//Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function MayorQueNum(Array, Y){
    let ContadorMayores = 0;
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] > Y){
            ContadorMayores++;
        }
        }
        return ContadorMayores;
    }

//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function ArrayCuadrados(Array){
    for (let i = 0; i < Array.length; i++) {
      Array[i] *= Array[i];
    } 
    return Array;
    }

//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function ReemplazaNegativos(Array){
        for (let i = 0; i < Array.length; i++) {
        if(Array[i] < 0){
            Array[i] = 0;
        }
        }
        return Array;
    }

//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function MaxMinProm(Array){
    let ArrayNuevo = [];
    // utilizo las funciones creadas en 5 y 6
    // máximo
    ArrayNuevo.push(BuscarMax(Array));
    // mínimo
    let MinActual = Array[0];
        for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length; j++) {
            if(Array[j] < Array[i]){
            MinActual = Array[j];
            }
        }
        }
        ArrayNuevo.push(MinActual);
        // promedio
        ArrayNuevo.push(BuscarProm(Array));
        return ArrayNuevo;
    }

//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function IntercambiaPconU(Array){
    let temporal = 0;
    temporal = Array[0];
    Array[0] = Array[Array.length-1];
    Array[Array.length-1] = temporal;
    
    return Array;
    }

//De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function InsertaStringANegativos (Array){
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] < 0){
            Array[i] = "Dojo";
        }
        }
        return Array;
    }
