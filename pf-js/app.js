/**
 * En javascript hay 3 formas de declarar variables:
 * ! Existe una forma que ya no se recomienda usar
 * !var
 * Al proceso de crer una variable y darle un valor se le llama "declarar" y "asignar"
 * Las variables pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * * el operador "=" es el operador de asignación
 */

let nombre = "Josue";
console.log(nombre);
let name = "Alejandro";

const birthyear = 1996;
console.log(birthyear);
 
/**
 * Reasignando una variable (cambiando el valor que tiene)
 * Cuando reasignamos una variable (una variable ya creada)
 * !Ya no es necesario usar la palabra reservada "let" o "const"
 */

nombre = "Brenfer";
console.log(nombre);

/** Seccion de prueba 
 * birthyear = 1995
 */

/**
 * Concatenar:
 * Nos permite pegar el valor de una variable a un textyo
*/

console.log("Hola soy " + nombre + " y estoy en gen con " + name + " naci en el año " + birthyear);