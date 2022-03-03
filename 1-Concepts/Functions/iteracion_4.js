/*
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
  let sum = 0;
  list.forEach((item) => {
    sum += item;
  });
  return sum / list.length;
}

console.log(average(numbers));
