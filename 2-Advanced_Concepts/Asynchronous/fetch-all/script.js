/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.

2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.
*/

const baseUrl = "https://api.nationalize.io";
let board = document.querySelector("#board");

async function getData(value) {
  if (value == "") {
    alert("Tienes que introducir algun nombre para la busqueda.");
    return;
  }
  let response = await fetch(baseUrl + "?name=" + value.toLowerCase());
  let dataJson = await response.json();
  let data = [...dataJson.country];

  document.querySelector("#input").value = "";

  if (data.length > 0) {
    let answerTitle = document.createElement("p");
    answerTitle.className = "answer-title";
    answerTitle.innerHTML = `El nombre ${value.toUpperCase()} tiene la posibilidad de encontrarse en los siguientes paises`;
    board.appendChild(answerTitle);

    data.forEach((item) => {
      let container$$ = document.createElement("div");
      container$$.className = "item-container";
      let p$$ = document.createElement("p");
      const btnDelete$$ = document.createElement("button");
      btnDelete$$.className = "btn-delete";
      btnDelete$$.textContent = "X";
      btnDelete$$.addEventListener("click", () => removeItem(container$$));
      p$$.innerHTML = `${item.country_id} -- ${item.probability}`;
      container$$.appendChild(p$$);
      container$$.appendChild(btnDelete$$);
      board.appendChild(container$$);
    });
  } else {
    let nothingFound = document.createElement("p");
    nothingFound.innerHTML =
      "No se han encontrado registros para la petición introducida.";
    board.appendChild(nothingFound);
  }
}

function removeItem(container$$) {
  container$$.remove();
  console.log(document.querySelectorAll(".item-container").length);
  if (document.querySelectorAll(".item-container").length == 0)
    document.querySelector(".answer-title").innerHTML = "";
}
