/* Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

let noms = ['Anna', 'Bernat', 'Clara'];
console.log("Ejercicio 1: (lista de nombres con forEach())");
noms.forEach((element) => console.log(element));

/* Exercici 2
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

let nombres = ['Anna', 'Bernat', 'Clara'];
console.log("Ejercicio 2: (lista de nombres con for-of)");
for (let nombre of nombres) {
    console.log(nombre);
}

/* Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6]; */

let numbers = [1, 2, 3, 4, 5, 6];

const pairs = numbers.filter(function calculate(number) {
    return number % 2 === 0;
})

console.log("Ejercicio 3:\n Los números pares son: " + pairs.join(", "));

/* Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent. */

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };
console.log("Ejercicio 4:")

for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`)
}

/* Exercici 5
for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6]; */

let numeros = [1, 2, 3, 4, 5, 6];
console.log("Ejercicio 5:");

for (let numero of numeros) {
    if (numero === 5) { break; }
    console.log(numero)
}

/* Exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara'] */

let names = ['Anna', 'Bernat', 'Clara'];
console.log("Ejercicio 6:");

for (let [i, name] of names.entries()) {
    console.log(`${name} se encuentra en la posicion ${i}`)
}


