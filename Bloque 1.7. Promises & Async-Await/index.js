/* Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */

const myPromise = new Promise((resolve) => {
    setTimeout(function() { resolve(console.log("Ejercicio 1:\n Hola, món")); }, 2000);
});

/* Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */

const myPromise2 = new Promise((resolve) => {
    setTimeout(function() { resolve("Ejercicio 2: (con .then)\n Hola, món"); }, 2500);
});

myPromise2.then(function(value) {
    console.log(value)
})

/* Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

const myPromise3 = new Promise((resolve, reject) => {
    let input = "Hola"
    setTimeout(
        input === "Hola"          
        ? resolve(console.log("Ejercicio 3:\n " + input))
        : reject(console.error("Error"))
     , 3000)
    }) 

/* Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.*/

async function myDisplay() {
    let myPromiseAwait = new Promise((resolve) => {
        setTimeout(function() { resolve(" Hola, món"); }, 3500);
    });
    console.log("Ejercicio 4: (con async/await)\n" + await myPromiseAwait);
}
myDisplay();

/*Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch. */

/*async function myDisplay() {
    let myPromiseAwait = new Promise((resolve, reject) => {
        setTimeout(function() { resolve(" Hola, món"); }, 3500);
        setTimeout(function() { reject("Error"); }, 3500);
    });
    console.log("Ejercicio 5: (con try7catch)\n" + await myPromiseAwait);
}
myDisplay(); */

/* Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola. */

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Ejercicio 6:\n ¡Hola ");
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000,"a todos!");
});

Promise.all([p1, p2]).then((values) => {console.log(values);})

