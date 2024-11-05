let total = 0;
let numero; 
// Usamos un do...while para seguir pidiendo números hasta que se ingrese "0000"
do {
    numero = parseInt(prompt("Introduce un número para sumar. Ingresa 0000 para finalizar:"));

    if (numero !== 0000) {
        total += numero; 
    }

}