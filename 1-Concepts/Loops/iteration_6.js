/*
**Iteración #6: Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:
*/

let toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

/*
for (const [index, value] of toys.entries()) {
  if (value.name.toLowerCase().includes("gato")) {
    toys.splice(index, 1);
  }
}

*/


function cleanList(list, word) {
  let loop = false;
  for (const [index, value] of toys.entries()) {
    if (value.name.toLowerCase().includes(word)) {
      console.log("hola");
      toys.splice(index, 1);
      loop = true;
    }
  }
  if (!loop) return;
  cleanList(list, word);
}

cleanList(toys, "gato");

console.log(toys);
