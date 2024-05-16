function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

var acu = "";

  for (var i = texto.length - 1; i >= 0; i--){
      acu += texto[i];
  }
return acu;


// Para invertir una cadena en JavaScript, puedes utilizar el método split() para dividir la cadena en un array de caracteres, luego usar el método reverse() para invertir el orden de los elementos en el array, y finalmente join() para unir los caracteres en una nueva cadena


// var cara = texto.split(``)
// console.log(cara)

// var caraInver = cara.reverse();
// console.log(caraInver)


// var cadeInver = caraInver.join(``);
// console.log(cadeInver);

// return cadeInver;

}

invertirTexto("hola mundo")

module.exports = invertirTexto;
