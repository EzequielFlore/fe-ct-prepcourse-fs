function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var nu_array = [];

   for(var i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0]===`a` || arrayOfStrings[i][0] === `A`){
         nu_array.push(arrayOfStrings[i]);
      }
   }
   return nu_array;

}

module.exports = filter;
