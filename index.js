
// Arrays
//  1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = [];

//  2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

//  3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = [0,2,4,6,8];

//  4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

const arrayBidimensional = [[0,1,2], ['a', 'b', 'c'] ]

// Funciones
//  5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function sum (num1, num2){

    return ('La suma de los numeros es: ', num1 + num2);
}

//  6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function exp (num1, num2){

    return ('El resultado exponente es: ', num1 ** num2);
    //Math.pow(num1, num2)
}

//  7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

let message;

function wordseparate(message){

    message = prompt("Introduce un mensaje")
    const separationArray = message.split(" ");

    return alert(separationArray);
}

wordseparate();


//  8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

let message1 = prompt("Introduce un mensaje");
let number1 = prompt("Introduce un numero");

function repeatString(){
    
    message1 = message1.toString();
    number1 = Number(number1);

    alert(' ',message1.repeat(number1),' ');

}

repeatString();

//  9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

let numberprime = prompt("Introduce un numero");
function primeNumber(numberprime){

    if (numberprime % 2 == 0 || numberprime == 1) {
        
        return alert("No es primo")
        
    }else{

        return alert("Es primo")
    }
}

primeNumber(numberprime);

// Mezclando arrays y funciones
//  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

const numberArray = [3,2,5,4,1];   

function orderArray(functionArray){

    const functionArray2 = functionArray.sort((a,b => a-b));
    return console.log(functionArray2);


    }

orderArray(numberArray);

//  11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pairNumbers(numbers) {
    numbers.filter(numbers => numbers % 2 === 0);

    return console.log(numbers)
  }

pairNumbers(numberArray2);

//  12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

const numberArray3 = [0, 1, 2];

function arrayToString(arraystr){

    const strarray = arraystr.toString();
    return console.log(strarray)
}

//  13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array



//  14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

function deleteDuplicate(array) {
    const array2 = new Set(array);
    return console.log(Array.from(array2));
}

deleteDuplicate(duplicateArray);

// Iteraciones 🏰 proyecto 🏰
// Arrays
//  15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//  16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

const holaMundo = ['Hola', 'Mundo'];

//  17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const arrayvarios = ['hola', 'que', 23, 42.33, 'tal'];


//  18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// Funciones
//  19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

function multiplicacion(a, b) {
    return a * b;
  }
  

//  20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

function division(a, b) {
    return a / b;
  }

//  21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num){

    let num = prompt("Introduce un numero")

    if (num % 2 === 0) {
        
        return alert("El numero introducido es par")
        
    }else{
        return alert("El numero introducido no es par")
    }

}

esPar();

//  22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

const arrayFunciones = [suma, resta, multiplicacion];

console.log(arrayFunciones[0](5, 3)); 
console.log(arrayFunciones[1](5, 3));
console.log(arrayFunciones[2](5, 3));

// Mezclando arrays y funciones
//  23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor



//  24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

const ArrayImpares = [1,2,3,4,5];

function obtenerImpares(array) {

    array2 = array.filter(num => num % 2 !== 0);
    return console.log(array2);
}

obtenerImpares(ArrayImpares);

//  25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6


const numeros = [1, 2, 3];

function sumarArray(array){

    let total=0;

    for(let i = 0; i < numeros.length; i++) {
        
    total+=numeros[i];

    }

    const resultadoArray = total.split(" ");

    console.log(resultadoArray);
}












