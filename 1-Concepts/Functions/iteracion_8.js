/*
**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
  Puedes usar este array para probar tu función:
*/

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(list) {
  //Crear array auxiliar para recoger las ocurrencias únicas.
  let auxList = [];
  list.forEach((item) => {
    if (!auxList.includes(item)) {
      auxList.push(item);
    }
  });
  //Crear un objeto para guardar la ocurrencia y su número.
  let counter = 0;
  let auxObject = {};
  auxList.forEach((itemUnique) => {
    list.forEach((itemList) => {
      if (itemUnique == itemList) counter++;
    });
    auxObject[itemUnique] = counter;
    counter = 0;
  });
  return auxObject;
}

console.log(repeatCounter(counterWords));
