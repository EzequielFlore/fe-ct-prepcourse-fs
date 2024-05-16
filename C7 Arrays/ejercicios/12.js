function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  return array.map(elemento => typeof elemento === 'string' ? elemento.toUpperCase() : elemento);

}

module.exports = convertirStringAMayusculas;
// Este código es una expresión de función flecha en JavaScript que utiliza el método `map()` para iterar sobre cada elemento de un array. Aquí está su desglose:

// - `array.map(...)`: Este es el método `map()` que se llama en el array `array`. `map()` itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la función proporcionada para cada elemento.

// - `(elemento => ...)` : Esta es una función flecha que se pasa como argumento a `map()`. Toma un parámetro, `elemento`, que representa cada elemento del array mientras se itera sobre él.

// - `typeof elemento === 'string' ? elemento.toUpperCase() : elemento`: Esta es una expresión condicional ternaria que comprueba si `elemento` es una cadena de texto. Si es una cadena de texto (`typeof elemento === 'string'`), entonces `elemento.toUpperCase()` se ejecuta para convertir `elemento` a mayúsculas. Si `elemento` no es una cadena de texto, se devuelve el mismo `elemento` sin cambios.

// Entonces, en resumen, esta línea de código `return array.map(elemento => typeof elemento === 'string' ? elemento.toUpperCase() : elemento);` toma un array como entrada, itera sobre cada elemento, y si el elemento es una cadena de texto, lo convierte a mayúsculas; de lo contrario, deja el elemento sin cambios. Finalmente, devuelve un nuevo array con los elementos modificados o sin modificar.