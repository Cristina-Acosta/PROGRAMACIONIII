// ============================================================================
// TRABAJO PRÁCTICO: ALGORITMIA CON ARRAYS Y STRINGS
// Tecnicatura Universitaria en Programación - UTN
// ============================================================================

// ----------------------------------------------------------------------------
// 1️⃣ CREAR UN ARRAY DE PALABRAS
// ----------------------------------------------------------------------------
console.log("=== 1️⃣ CAPTURA INICIAL DE PALABRAS ===");

const palabras = [];

// Solicitamos 5 palabras al usuario mediante prompt
for (let i = 0; i < 5; i++) {
  let entrada = prompt(`Ingrese palabra n° ${i + 1} de 5:`);
  
  // Validamos que no ingrese valores nulos o vacíos
  if (entrada === null || entrada.trim() === "") {
    entrada = "PalabraVacia";
  }
  
  palabras.push(entrada.trim());
}

// Mostramos la copia exacta inicial mediante el operador spread
console.log("Array original ingresado:", [...palabras]);


// ----------------------------------------------------------------------------
// 2️⃣ MANIPULAR EL ARRAY
// ----------------------------------------------------------------------------
console.log("\n=== 2️⃣ MANIPULACIÓN DEL ARRAY ===");

// Agregar una palabra al inicio
palabras.unshift("INICIO");

// Agregar una palabra al final
palabras.push("FINAL");

// Eliminar la segunda palabra (índice 1)
palabras.splice(1, 1);

// Mostrar el array actualizado
console.log("Array tras modificaciones (unshift, push, splice):", palabras);


// ----------------------------------------------------------------------------
// 3️⃣ ANALIZAR LAS PALABRAS
// ----------------------------------------------------------------------------
console.log("\n=== 3️⃣ ANÁLISIS DE LAS PALABRAS ===");

let palabraMasLarga = "";
let algunaTieneA = false;

// Recorremos el arreglo actualizado
for (let i = 0; i < palabras.length; i++) {
  let palabraActual = palabras[i];

  // Imprimir la longitud de cada palabra
  console.log(`- Longitud de "${palabraActual}": ${palabraActual.length} caracteres.`);

  // Identificar la palabra más larga
  if (palabraActual.length > palabraMasLarga.length) {
    palabraMasLarga = palabraActual;
  }

  // Comprobar si contiene la letra "a" (case-insensitive)
  if (palabraActual.toLowerCase().includes("a")) {
    algunaTieneA = true;
  }
}

console.log(`\n> La palabra más larga del arreglo es: "${palabraMasLarga}"`);

if (algunaTieneA) {
  console.log("> Confirmación: Al menos una palabra contiene la letra 'a'.");
} else {
  console.log("> Confirmación: Ninguna palabra contiene la letra 'a'.");
}


// ----------------------------------------------------------------------------
// 4️⃣ JUEGO DE INVERSIÓN DE PALABRAS
// ----------------------------------------------------------------------------
console.log("\n=== 4️⃣ INVERSIÓN DE PALABRAS ===");

const palabrasInvertidas = [];

for (let i = 0; i < palabras.length; i++) {
  // Invertimos usando split, reverse y join
  let invertida = palabras[i].split("").reverse().join("");
  palabrasInvertidas.push(invertida);
}

console.log("Array de palabras invertidas:", palabrasInvertidas);
alert("Palabras invertidas:\n" + palabrasInvertidas.join(", "));


// ----------------------------------------------------------------------------
// 5️⃣ PALÍNDROMOS
// ----------------------------------------------------------------------------
console.log("\n=== 5️⃣ VERIFICACIÓN DE PALÍNDROMOS ===");

let respuesta = prompt("¿Desea comprobar si hay palíndromos en las palabras? (si/no):");

if (respuesta && respuesta.toLowerCase() === "si") {
  let hayPalindromos = false;

  for (let i = 0; i < palabras.length; i++) {
    let original = palabras[i].toLowerCase();
    let alReves = original.split("").reverse().join("");

    if (original === alReves) {
      console.log(`- ¡La palabra "${palabras[i]}" es un PALÍNDROMO!`);
      hayPalindromos = true;
    }
  }

  if (!hayPalindromos) {
    console.log("- Ninguna de las palabras ingresadas es un palíndromo.");
  }
} else {
  console.log("Verificación de palíndromos salteada por el usuario.");
}


// ----------------------------------------------------------------------------
// 6️⃣ BONUS (OPCIONAL)
// ----------------------------------------------------------------------------
console.log("\n=== 6️⃣ BONUS ===");

// 1. Contar cuántas palabras tienen más de 4 caracteres
let contadorMasDeCuatro = 0;
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 4) {
    contadorMasDeCuatro++;
  }
}
console.log(`Cantidad de palabras con más de 4 caracteres: ${contadorMasDeCuatro}`);

// 2. Crear un string con todas las palabras unidas por "-"
let cadenaUnida = palabras.join("-");
console.log(`Palabras unidas por guiones: "${cadenaUnida}"`);