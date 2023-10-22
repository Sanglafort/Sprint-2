/* Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

const array = [1, 2, 3, 4];

const arrayAlCuadrado = array.map(function(n) {
    return n * n;
})

console.log("Ejercicio 1:\n 1, 2, 3 y 4 al cuadrado son: " + arrayAlCuadrado.join(", "));

/* Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells. */

const numbers = [1, 2, 3, 4];

const pairs = numbers.filter(function calculate(number) {
    return number % 2 === 0;
})

console.log("Ejercicio 2:\n Los números pares son: " + pairs.join(", "));

/* Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10. */

const nums = [1, 10 , 8, 11];

const first = nums.find((element) => element > 10);

console.log("Ejercicio 3:\n " + first);

/*Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números. */

const numeros = [13, 7, 8, 21];

let suma = numeros.reduce((total, valor) => total + valor);

console.log("Ejercicio 4:\n La suma de 13, 7, 8 y 21 es:  " + suma);

/* Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
-Filtra els nombres majors o iguals a 10.
-Multiplica cada nombre filtrat per 2.
-Calcula la suma dels nombres filtrats i multiplicats per 2.
-La funció ha de retornar el resultat de la suma. */

const arr = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

const resultado = arr.filter((item) => item > 10)
// falta multiplicar cada numero filtrado X 2 y sumarlos.
console.log(resultado);

/* Exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament */

const myArray = [11, 12, 13, 14];

let allOverTen = myArray.every((el) => el > 10);
let someOverTen = myArray.some((el) => el > 10);

console.log("Ejercicio 6:\n ¿Todos los elementos son mayores de 10? " + allOverTen + "\n ¿Algún elemento es mayor de 10? " + someOverTen);