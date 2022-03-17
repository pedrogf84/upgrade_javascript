pokemonNumber = 151;
baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}`;

let data;
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

let container$$ = document.querySelector("#container");

window.onload = () => {
  init();

  //EVENT LISTENER TO SEARCH POKEMON WHEN TYPING IN INPUT.
  const input$$ = document.querySelector("#search-input");
  input$$.addEventListener("input", () => filterPokemons(input$$.value));
};

const init = async () => {
  data = await getAllPokemon();
  printPokemons(data);
};

/*
THE GET ALL POKEMON FUNCTION
@return: the pokemon object array
*/

const getAllPokemon = async () => {
  try {
    let response = await fetch(baseUrl);
    let dataJson = await response.json();

    return dataJson.results;
  } catch (e) {
    console.error("error", e);
  }
};

/*
THE GET (SINGLE) POKEMON FUNCTION
params: - url -> the pokeapi address of a single pokemon
@return: pokemon object with selected data.
*/

const getPokemon = async (url) => {
  let response = await fetch(url);
  let dataJson = await response.json();
  let types = [];
  for await (item of dataJson.types) {
    types.push(item.type.name);
  }

  let {
    sprites: {
      other: {
        dream_world: { front_default },
      },
    },
  } = dataJson;
  let { name, id } = dataJson;
  console.log({ name, id, front_default, types });
  return { name, id, front_default, types };
};

const buildContainer = () => {
  let card$$ = document.createElement("div");
};

/*
THE PRINT POKEMON FUNCTION 
@void
*/

const printPokemons = async (data) => {
  container$$.innerHTML = "";
  for await (let item of data) {
    let pokemon = await getPokemon(item.url);

    //create the elements
    let card$$ = document.createElement("div");
    card$$.className = "card";
    let imgContainer$$ = document.createElement("div");
    imgContainer$$.className = "img-container";
    let img$$ = document.createElement("img");
    img$$.className = "img-pokemon";
    name$$ = document.createElement("div");
    name$$.className = "name-pokemon";
    id$$ = document.createElement("div");
    id$$.className = "id-pokemon";
    let types$$ = document.createElement("div");
    types$$.className = "types-pokemon";

    switch (pokemon.types[0]) {
      case "fire":
        card$$.style.backgroundColor = colours.fire;
        break;
      case "grass":
        card$$.style.backgroundColor = colours.grass;
        break;
      case "water":
        card$$.style.backgroundColor = colours.water;
        break;
      case "bug":
        card$$.style.backgroundColor = colours.bug;
        break;
      case "normal":
        card$$.style.backgroundColor = colours.normal;
        break;
      case "poison":
        card$$.style.backgroundColor = colours.poison;
        break;
      case "electric":
        card$$.style.backgroundColor = colours.electric;
        break;
      case "ground":
        card$$.style.backgroundColor = colours.ground;
        break;
      case "fairy":
        card$$.style.backgroundColor = colours.fairy;
        break;
      case "fighting":
        card$$.style.backgroundColor = colours.fighting;
        break;
      case "rock":
        card$$.style.backgroundColor = colours.rock;
        break;
      case "psychic":
        card$$.style.backgroundColor = colours.psychic;
        break;
      case "ghost":
        card$$.style.backgroundColor = colours.ghost;
        break;
      case "ice":
        card$$.style.backgroundColor = colours.ice;
        break;
      case "dragon":
        card$$.style.backgroundColor = colours.dragon;
        break;
    }

    //fill the elements
    for (let i = 0; i < pokemon.types.length; i++) {
      types$$.innerHTML += pokemon.types[i];
      if (i != pokemon.types.length - 1) {
        types$$.innerHTML += " - ";
      }
    }
    img$$.src = pokemon["front_default"];
    name$$.textContent = pokemon["name"];
    id$$.textContent = pokemon.id;

    imgContainer$$.appendChild(img$$);
    card$$.appendChild(imgContainer$$);
    card$$.appendChild(id$$);
    card$$.appendChild(name$$);
    card$$.appendChild(types$$);
    container$$.appendChild(card$$);
  }
};

/*
THE FILTER POKEMON FUNCTION
params: - name: the string to filter
@void
*/

const filterPokemons = (input) => {
  input = input.toLowerCase();

  const filteredPokemons = data.filter((pokemon) =>
    pokemon.name.includes(input)
  );
  console.log(input, filteredPokemons);
  printPokemons(filteredPokemons);
};
