function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var acu = 0;

  for (var i = 0; i < arrayOfNums.length; i++){
    acu += arrayOfNums[i];
  }return acu;

}

module.exports = agregarNumeros;
