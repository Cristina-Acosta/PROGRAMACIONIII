//Ejercicio 1: Iteración inversa.

const numeros = [1, 2, 3, 4];
const numerosInvertidos = [];

// Recorremos desde el último índice (numeros.length - 1) hasta el primero (0)
for (let i = numeros.length - 1; i >= 0; i--) {
  numerosInvertidos.push(numeros[i]);
}

console.log("Array original:", numeros);
console.log("Array invertido:", numerosInvertidos);