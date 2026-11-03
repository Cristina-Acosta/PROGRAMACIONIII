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
//Ejercicio3: Contar vocales.
const texto= "SOMOS geniales";
const vocales="aeiou";
let contador=0;
for (i=0;i<texto.length;i++){
  if(vocales.includes(texto[i].toLowerCase())){
    contador++;
  }
}
console.log(texto," tiene: ",contador," vocales.");
//Ejercicio 4: Rotación de array
const numeros = [10, 20, 30, 40];

// 1. Extraemos el último elemento con .pop() (devuelve 40)
const ultimoElemento = numeros.pop(); 

// 2. Insertamos ese elemento al principio del arreglo con .unshift()
numeros.unshift(ultimoElemento);

console.log("Array rotado a la derecha:", numeros);
// Resultado: [40, 10, 20, 30]