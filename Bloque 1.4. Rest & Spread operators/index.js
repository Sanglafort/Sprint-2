/* Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

const array1 = ["abedul", "roble", "pino"];
const array2 = ["boj", "sabina"];

const array3 = [...array1, ...array2];

console.log("Ejercicio 1:\n " + array3.join(", "));

/* Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma. */

function suma(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log("Ejercicio 2:\n La suma de 5, 7 y 8 es: " + suma(5, 7, 8));

/* Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat. */

const objecte1 = {
    nom: "Rosa",
    cognom: "Peral",
}
console.log("Ejercicio 3:\n (en objeto2 se añade la edad)")
const objecte2 = {...objecte1, age:42};
console.log(objecte2, objecte1)

/* Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable. */

const array = [45, 36, 98, 0, 15];
console.log("Ejercicio 4:\n Array = [45, 36, 98, 0, 15]");

const [primero, segundo, ...resto] = array;
console.log("  Primer elemento: " + primero);
console.log("  Segundo elemento: " + segundo);
console.log("  Y el resto: " + resto.join(", "));

/* Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array. */

function add(a, b, c) {
    return a + b + c;
}

const numbers = [2, 5, 8];

console.log("Ejercicio 5:\n La suma de 2, 5 y 8 es: " + add(...numbers));

/* Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou. */

const car = {
    brand: "Ford",
    model: "Fiesta",
    color: "red"
}

const home = {
    tipus: "Masia",
    floors: 3
}

const myProperties = {...car, ...home};

console.log("Ejercicio 6:\n" + JSON.stringify(myProperties));