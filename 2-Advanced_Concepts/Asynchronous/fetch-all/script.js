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

/*
THE GETDATA FUNCTION

@params
value -> input introduced by user.
*/
async function getData(value) {
  //no empty values check
  if (value == "") {
    alert("Tienes que introducir algun nombre para la busqueda.");
    return;
  }
  //petition
  let response = await fetch(baseUrl + "?name=" + value.toLowerCase());
  let dataJson = await response.json();
  let data = [...dataJson.country];

  //cleaning user input
  document.querySelector("#input").value = "";

  //print data
  if (data.length > 0) {
    let answerTitle = document.createElement("p");
    //the all data title
    answerTitle.className = "answer-title";
    answerTitle.innerHTML = `El nombre ${value.toUpperCase()} tiene la posibilidad de encontrarse en los siguientes paises`;
    board.appendChild(answerTitle);

    data.forEach((item) => {
      //the container div
      let container$$ = document.createElement("div");
      container$$.className = "item-container";
      //the individual information
      let p$$ = document.createElement("p");
      p$$.innerHTML = `${item.country_id} -- ${item.probability}`;
      //the delete current div btn
      const btnDelete$$ = document.createElement("button");
      btnDelete$$.className = "btn-delete";
      btnDelete$$.textContent = "X";
      btnDelete$$.addEventListener("click", () => removeItem(container$$));
      //appending all items to container and board
      container$$.appendChild(p$$);
      container$$.appendChild(btnDelete$$);
      board.appendChild(container$$);
    });
  } else {
    //nothing found matching user's petition
    let nothingFound = document.createElement("p");
    nothingFound.innerHTML =
      "No se han encontrado registros para la petición introducida.";
    board.appendChild(nothingFound);
  }
}

//THE REMOVE ITEM DIV FUNCTION
function removeItem(container$$) {
  container$$.remove();
  //checking if there are no divs containing info
  if (document.querySelectorAll(".item-container").length == 0)
    document.querySelector(".answer-title").remove();
}
