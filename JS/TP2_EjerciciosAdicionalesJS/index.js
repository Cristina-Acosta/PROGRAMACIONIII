//Ejercicio 1: Invertir un array sin .reverse().
const palabras=[1,2,3,4];
const palabrasInvertidas=[];
for (let i=0;i <palabras.length;i++){
    palabrasInvertidas.unshift(palabras[i])
}
console.log(palabrasInvertidas)