/*
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
*/

let showme = document.querySelector(".showme");
console.log("1.1", showme);

/*
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
*/

let h1 = document.querySelector("#pillado");
console.log("1.2", h1.innerHTML);

/*
1.3 Usa querySelector para mostrar por consola todos los p
*/

let p = document.querySelectorAll("p");
p.forEach((node) => {
  console.log("1.3", node.innerHTML);
});

/*
1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
*/

let pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach((node) => {
  console.log("1.4", node.innerHTML);
});

/*
1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".
*/

let testMe = document.querySelectorAll("*[data-function='testMe']");
testMe.forEach((node) => {
  console.log("1.5", node.innerHTML);
});

/*
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/

console.log(
  "1.6",
  document.querySelectorAll("*[data-function='testMe']")[2].innerHTML
);
