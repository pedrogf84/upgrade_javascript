/*

**Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.

*/

let array = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

function swap(array, i, j) {
  let auxStr = array[i];
  array[i] = array[j];
  array[j] = auxStr;
  return array;
}

array = swap(array, 1, 3);

console.log(array);
