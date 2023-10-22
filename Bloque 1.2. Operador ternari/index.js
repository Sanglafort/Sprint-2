/* Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

function potConduir(age) {
    let result = age >= 18 ? "pots conduir." : "no pots conduir.";
    return result; 
}
console.log("Ejercicio 1:\n Amb 16 anys " + potConduir(16) + "\n Amb 18 anys " + potConduir(18));

/* Exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. */

let num1 = 45;
let num2 = 3;

let result = num1 > num2 ? "Número 1 es más grande" : "Número 2 es más grande";
console.log("Ejercicio 2:\n (num1 = 45 y num2 = 3) " + result);

/* Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.*/

let n = 2;

let number = n > 0 ? "Positivo" : n < 0 ? "Negativo" : "Cero";
console.log("Ejercicio 3:\n (n = 2) " + number);

/* Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/

function trobarMaxim(a, b, c) {
    let maxim = (a > b && b > c) ? a : (a > b && c > a) ? c : b;
    return maxim;
}
console.log("Ejercicio 3b:\n (valores: a=30, b=20, c=10) " + trobarMaxim(30, 20, 10) + " es el valor máximo.\n (valores: a=10, b=20, c=9) " + trobarMaxim(10, 27, 9) + " es el valor máximo.\n (valores: a=30, b=20, c=198) " + trobarMaxim(30, 20, 198) + " es el valor máximo.");

/* Exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell. */

console.log("Ejercicio 4:")

function parOImpar() {
    let nums = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? console.log(nums[i] + " es par.") : console.log(nums[i] + " es impar.")
    }
}
parOImpar();
