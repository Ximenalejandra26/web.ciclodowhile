let total = 0;
let numero; 
// Usamos un do...while para seguir pidiendo números hasta que se ingrese "0000"
do {
    numero = parseInt(prompt("Introduce un número para sumar. Ingresa 0000 para finalizar:"));

    if (numero !== 0000) {
        total += numero; 
    }

} while (numero !== 0000); 

// Imprimir el valor total acumulado
console.log("El valor acumulado es: " + total);

if (total > 0) {
    console.log("El total acumulado es mayor a cero.");
} else if (total < 0) {
    console.log("El total acumulado es menor a cero.");
} else {
    console.log("El total acumulado es cero.");
}
