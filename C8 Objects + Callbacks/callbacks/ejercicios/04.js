function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   // Utilizando el metodo reduce
   // var suma = arrayOfNumbers.reduce((acu,ele) =>{ return acu + ele})

var suma = 0;

   for (var i = 0; i < arrayOfNumbers.length; i++){
      suma +=arrayOfNumbers[i];
   }

   cb(suma);

}

module.exports = sumarArray;
