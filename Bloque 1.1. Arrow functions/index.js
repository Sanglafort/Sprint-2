/*  Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}. */

    let add = (a, b) => a + b;  
    console.log("Ejercicio 1:\n La suma de 3 y 7 es: " + add(3, 7));
  //  document.write(add(4,5))

/*  Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/

    const randomNumber = () => console.log("Ejercicio 2:\n El número afortunado es el: " + Math.floor(Math.random()*(100+1)));
    randomNumber();

/*  Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});

   class Person {
        constructor(name) {
            this.name = name            
        }
        greet(){
            saludar(funtion())
            return `Hola, ${this.name}`;

        //greet() => console.log(`Hola, ${this.name}`)
        }
    }

    new Person("Paco").greet(); */

/*  Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa. */

    console.log("Ejercicio 4:");
    const numbers = [13,25,37,42];

    const printNumbers = () => numbers.forEach(number => console.log(number));
    printNumbers();

/*  Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.  */

    setTimeout(() => console.log("Ejercicio 5:\n" + "Hola\n... y solo he tardado 3 segundos"), 3000);