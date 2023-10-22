/* Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

function processar(n, callback) {
    let miNum = "Ejercicio 1:\n El número es el " + n;
    callback(miNum);
}

function verNum(n) {
    console.log(n);
}

processar(7, verNum);

/* Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

function calculadora(n1, n2, callback) {
    callback(n1 + n2)    
}

calculadora(8, 23, function(result) {
    console.log("Ejercicio 2:\n La suma de 8 y 23 es: " + result);
});

/* Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.*/

function esperarISaludar(name, callback) {
    setTimeout(function() {
        callback(name);
    }, 2000);
}

esperarISaludar("Jaime", function saludar(nom){
    console.log("Ejercicio 3:\n Hola " + nom);
});

/* Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

function processarElements(myArr, callback) {
    console.log("Ejercicio 4:\n (1, 2, 3 y 5 multiplicados por 3: " + callback(myArr));
}

function multiplicar3(arr) {
    const newArr = [];
    for(let i = 0; i<arr.length; i++) {
        newArr.push(arr[i] * 3);
    }
    return newArr;
}

processarElements([1,2,3,5], multiplicar3);

/* Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada. */

function processarCadena(myStr, callback) {
    console.log("Ejercicio 5:\n (pasar a mayusculas) " + callback(myStr));
}

function upperCase(str) {
    let result = str.toUpperCase();
    return result;
}

processarCadena("todos los hombres buenos", upperCase);