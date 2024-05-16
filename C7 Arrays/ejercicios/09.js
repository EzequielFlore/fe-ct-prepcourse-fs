function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

      var numAleatorio = Math.floor(Math.random() * array.length);
      return array[numAleatorio];

}

module.exports = obtenerElementoAleatorio;
