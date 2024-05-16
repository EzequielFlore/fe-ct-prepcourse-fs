function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // var alto = 0;

  // for (var i = 0; i < array.length; i++){
  //   if (array[i] > )
  // }

    if (array.length === 0) {
    return 0; // Si el array está vacío, devuelve -1
}

let max = array[0]; // Suponemos que el primer elemento es el máximo
let maxIndex = 0; // El índice del máximo es 0 al principio

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]; // Actualiza el máximo si encontramos un valor mayor
        maxIndex = i; // Actualiza el índice del máximo
    }
}

return maxIndex; 

}

module.exports = encontrarIndiceMayor;
