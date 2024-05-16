function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  // solusion utilizando filter 
  // return array.filter(numero => numero % 2 === 0);

  var numeroPar = [];

  for (var i = 0;i < array.length; i++){
    if(array[i] % 2 === 0){
        numeroPar.push(array[i]);
    }
  }return numeroPar;

}

module.exports = filtrarNumerosPares;
