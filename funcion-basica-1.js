<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        function a(){
            return 35;
        }
        console.log(a())
        // imprimirá 35


        function a(){
            return 4;
        }
        console.log(a()+a());
        // impimirá 8


        function a(b){
            return b;
        }
        console.log(a(2)+a(4));
        // imprimirá 6


        function a(b){
            console.log(b);
            return b*3;
        }
        console.log(a(3));
        // imprimirá 3 -> 9 

        function a(b){
            return b*4;
            console.log(b);
        }
        console.log(a(10));
        // imprimirá 40 

        function a(b){
            if(b<10) {
            return 2;
        }
        else     {
        return 4;
        }
        console.log(b);
        }
        console.log(a(15));
        //imprimirá 4

        function a(b,c){
        return b*c;
        }
        console.log(10,3); // imprimirá 10, 3 (no llama la función)
        console.log( a(3,10) ); // imprimirá 30
        

        function a(b){
        for(var i=0; i<10; i++){
        console.log(i);
        }
        return i;
        }
        console.log(3); // imprimirá 3
        console.log(4); // imprimirá 4


        function a(){
        for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
        }
        }
        a(); // imprimirá 2, 5, 8, 11



        function a(b,c){
        for(var i=b; i<c; i++) {
        console.log(i);
        }
        return b*c;
        }
        a(0,10);
        console.log(a(0,10));
        // imprimirá 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0


        function a(){
            for(var i=0; i<10; i++){
                for(var j=0; j<10; j++){
                console.log(j);
            }
            console.log(i);
            }
        }
        // No se ejecuta la función 

        function a(){
            for(var i=0; i<10; i++){
                for(var j=0; j<10; j++){
                    console.log(i,j);
                }
                console.log(j,i);
            }
        }
        // no se ejecuta la función     

                var z = 10;
        function a(){
            var z = 15;
            console.log(z);
        }
        console.log(z);
        // imprimirá 10 


                var z = 10;
        function a(){
            var z = 15;
            console.log(z);
        }
        a();
        console.log(z);
        // imprimirá 15, 10 


                var z = 10;
        function a(){
            var z = 15;
            console.log(z);
            return z;
        }
        z = a();
        console.log(z);
        // 15, 15

    </script>
    
    function count(x)
        for 

</body>
</html>