//Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
function Sigma(num){
    let Suma = 0;
    while(num != 0){
        Suma += num;
        num--;
    }
    return Suma;
}
    //console.log(Sigma(3));
    //console.log(Sigma(5));

//Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 
function Fibonacci(num){
    let fibo = [0,1];
    let ciclos = num - 1;
    let i = 0;

    if(num > 1){
        while(ciclos != 0){
            fibo.push(fibo[i] + fibo[i+1]);
            ciclos--;
            i++;
        }
    }
    return fibo[num];
}
    //console.log(Fibonacci(3));
    //console.log(Fibonacci(6));

//Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  
function Penultimo(Array){
    if(Array.length > 1){
        return Array[Array.length - 2];
    }
    else{
        return null;
    }
}
    // var Array = [1,2,3,4,5];
    // var Array1 = [6,7];
    // var Array2 = [8];
    // console.log(Penultimo(Array));
    // console.log(Penultimo(Array1));
    // console.log(Penultimo(Array2));

//Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
function N_Ultimo(Array,N){
    if(0 <= N <= Array.length - 1){
        return Array[Array.length - 1 - N];
    }
    else{
        return null;
    }
}
    //var Array = [1,2,3,4,5];
    //console.log(N_Ultimo(Array,2));

//Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
function SegundoMaximo(Array){
    let Maximo = Array[0];
    let Maximo2 = Array[0];

    if(Array.length > 1){
        for (let i = 0; i < Array.length; i++) {
            for (let j = 0; j < Array.length; j++) {
                if(Array[j] > Array[i]){
                    Maximo = Array[j];
                }
            }
        }
        for (let x = 0; x < Array.length; x++) {
            for (let y = 0; y < Array.length; y++) {
                if(Array[y] > Array[x] && Array[y] != Maximo){
                    Maximo2 = Array[y];
                }
            }
        }
        return Maximo2;
    }
    else{
        return null;
    }
}
//var Array = [1,6,14,11,5];
//console.log(SegundoMaximo(Array));

//Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function DobleArray(Array){
    let CantidadPush = Array.length;
    let CopiaArray = [...Array];
        let j = 0;

        while(CantidadPush != 0){
        Array.push(0);
        CantidadPush--;
    }

    for (let i = 0; i < Array.length ; i++) {
        if(i % 2 == 0){
            Array[i] = CopiaArray[j];
            Array[i+1] = CopiaArray[j];
            j++;
        }
    }
    return Array;
}
//var Array1 = [1,2,3,4];
//console.log(DobleArray(Array1));