function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  return palabras.join(` `);

  // La función join() une todos los elementos de un arreglo en una cadena, utilizando el separador especificado entre cada elemento. En este caso, el separador es un espacio en blanco ' ', que colocará un espacio entre cada palabra del arreglo.

}

module.exports = dePalabrasAFrase;
