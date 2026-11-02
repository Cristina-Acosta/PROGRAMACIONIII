//Ejercicio 1: Iteración inversa.

const numeros = [1, 2, 3, 4];
const numerosInvertidos = [];

// Recorremos desde el último índice (numeros.length - 1) hasta el primero (0)
for (let i = numeros.length - 1; i >= 0; i--) {
  numerosInvertidos.push(numeros[i]);
}

console.log("Array original:", numeros);
console.log("Array invertido:", numerosInvertidos);

//Ejercicio 2: Identificar palíndromos.
const palabras = ["hola", "oso", "dado", "radar", "reconocer", "roto", "raro", "anilina", "Anana", "rallar"];

for (let i = 0; i < palabras.length; i++) {
  let texto = palabras[i].toLowerCase();
  let esPalindromo = true;

  // Comparamos el extremo izquierdo con el extremo derecho avanzando hacia el centro
  for (let j = 0; j < texto.length / 2; j++) {
    if (texto[j] !== texto[texto.length - 1 - j]) {
      esPalindromo = false;
      break; // Si un carácter no coincide, salimos del ciclo interno
    }
  }

  if (esPalindromo) {
    console.log(`>> "${palabras[i]}": ¡PALÍNDROMO!`);
  } else {
    console.log(`>> "${palabras[i]}": NO PALÍNDROMO.`);
  }
}