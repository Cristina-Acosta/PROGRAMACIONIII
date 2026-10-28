//PUNTO 1
let palabras=[];
for (let i=0; i<5;i++){
    let entrada= prompt("Ingrese palabra n° "+(i+1)+": ");
    palabras.push(entrada);
}
console.log(palabras);
//PUNTO 2
//● Agregar una palabra al inicio del array.
palabras.unshift("1° palabra")
//● Agregar una palabra al final del array.
palabras.push("últimapalabra")
//● Eliminar la segunda palabra del array.
palabras.slice(1,1)
//● Mostrar el array actualizado.
console.log(palabras)