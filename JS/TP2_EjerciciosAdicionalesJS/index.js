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
const numeros1 = [10, 20, 30, 40];

// 1. Extraemos el último elemento con .pop() (devuelve 40)
const ultimoElemento = numeros1.pop(); 

// 2. Insertamos ese elemento al principio del arreglo con .unshift()
numeros1.unshift(ultimoElemento);

console.log("Array rotado a la derecha:", numeros1);
//Ejercicio 5: Ordenar números sin .sort()
const numerosDesordenados = [5, 2, 9, 1];
const arrayOrdenado = [...numerosDesordenados]; 
// Creamos copia para no mutar la fuente

for (let i = 0; i < arrayOrdenado.length; i++) {
  for (let j = 0; j < arrayOrdenado.length - 1 - i; j++) {
    if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
      // Intercambio mediante variable auxiliar
      let aux = arrayOrdenado[j];
      arrayOrdenado[j] = arrayOrdenado[j + 1];
      arrayOrdenado[j + 1] = aux;
    }
  }
}

console.log("Original:", numerosDesordenados);
console.log("Ordenado de menor a mayor:", arrayOrdenado);

// Ejercicio 6: Reemplazo de palabras
const fraseOriginal = "me gusta programar en Java";
const palabraAObjetivo = "Java";
const palabraReemplazo = "JavaScript";

const palabrasFrase = fraseOriginal.split(" ");

for (let i = 0; i < palabrasFrase.length; i++) {
  if (palabrasFrase[i] === palabraAObjetivo) {
    palabrasFrase[i] = palabraReemplazo;
  }
}

const fraseModificada = palabrasFrase.join(" ");

console.log("Frase original:", fraseOriginal);
console.log("Frase modificada:", fraseModificada);
// Ejercicio 7: Números únicos (sin usar Set)
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [];

for (let i = 0; i < numerosRepetidos.length; i++) {
  if (!numerosUnicos.includes(numerosRepetidos[i])) {
    numerosUnicos.push(numerosRepetidos[i]);
  }
}

console.log("Original con duplicados:", numerosRepetidos);
console.log("Arreglo con valores únicos:", numerosUnicos);
// Ejercicio 8: Intersección de arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const interseccion = [];

for (let i = 0; i < array1.length; i++) {
  let elementoActual = array1[i];
  if (array2.includes(elementoActual) && !interseccion.includes(elementoActual)) {
    interseccion.push(elementoActual);
  }
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Intersección (elementos comunes):", interseccion);

// Ejercicio 9: Contar palabras
const textoEjemplo = "hola mundo hola javascript";
const palabrasContadas = textoEjemplo.split(" ");
const frecuenciaPalabras = {};

for (let i = 0; i < palabrasContadas.length; i++) {
  let palabra = palabrasContadas[i].toLowerCase();
  
  if (frecuenciaPalabras[palabra]) {
    frecuenciaPalabras[palabra] += 1;
  } else {
    frecuenciaPalabras[palabra] = 1;
  }
}

console.log("Texto analizado:", textoEjemplo);
console.log("Frecuencia de palabras:", frecuenciaPalabras);

// Ejercicio 10: Matriz transpuesta
const matrizOriginal = [
  [1, 2, 3],
  [4, 5, 6]
];

const filasOriginales = matrizOriginal.length;
const columnasOriginales = matrizOriginal[0].length;

const matrizTranspuesta = [];

for (let col = 0; col < columnasOriginales; col++) {
  const nuevaFila = [];
  for (let fila = 0; fila < filasOriginales; fila++) {
    nuevaFila.push(matrizOriginal[fila][col]);
  }
  matrizTranspuesta.push(nuevaFila);
}

console.log("Matriz Original:", matrizOriginal);
console.log("Matriz Transpuesta:", matrizTranspuesta);