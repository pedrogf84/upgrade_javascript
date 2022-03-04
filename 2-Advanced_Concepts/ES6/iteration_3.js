/*
3.1 Dado el siguiente array, crea una copia usando spread operators.
*/
const pointsList = [32, 54, 21, 64, 75, 43];

let pointsListCopy = [...pointsList];
console.log("3.1", pointsListCopy);

/*
3.2 Dado el siguiente objeto, crea una copia usando spread operators.
*/
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
let toyCopy = { ...toy };
console.log("3.2", toyCopy);

/*
3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
*/
const pointsListX = [32, 54, 21, 64, 75, 43];
const pointsLis2X = [54, 87, 99, 65, 32];

let pointsListMerged = [...pointsListX, ...pointsLis2X];
console.log("3.3", pointsListMerged);

/*
3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
*/
const toyX = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
let toyMerged = { ...toyX, ...toyUpdate };
console.log("3.4", toyMerged);

/*
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
*/
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
let colorsEdited = [...colors].filter((value) => value != "amarillo");
console.log("3.5", colorsEdited);
