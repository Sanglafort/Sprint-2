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
    cognom: "Peral"
}

