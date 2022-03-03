/*
1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
*/

let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("1.1", avengers[0]);

/*
1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
*/

avengers[0] = "IRONMAN";
console.log("1.2", avengers);

/*
1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
*/

console.log("1.3", avengers.length);

/*
1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
*/
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log("1.4", rickAndMortyCharacters);

/*
1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/

rickAndMortyCharacters.pop();
console.log(
  "1.5",
  "primero:",
  rickAndMortyCharacters[0],
  "- último:",
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
);

/*
1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/

rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.splice(1, 1);
console.log("1.6", rickAndMortyCharacters);
