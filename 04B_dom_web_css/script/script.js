//THE HTML VARIABLES

let header$$ = document.createElement("header");
header$$.className = "header";
let main$$ = document.createElement("main");
let footer$$ = document.createElement("footer");
let listDiv$$ = document.createElement("div");
listDiv$$.className = "buy-list";

//THE NON HTML Variables

let data = [
  { name: "manzana", price: 4, image: "assets/apple.png" },
  { name: "plátano de Canarias", price: 5, image: "assets/banana.png" },
  { name: "kiwis", price: 6, image: "assets/kiwi.png" },
  {
    name: "fruta del dragon",
    price: 500,
    image: "assets/dragon-fruit.png",
  },
  {
    name: "fruta con pinchos",
    price: 33,
    image: "assets/durian.png",
  },
  { name: "frutas selectas", price: 12, image: "assets/fruits.png" },
  {
    name: "verduras selectas",
    price: 15,
    image: "assets/vegetables.png",
  },
  { name: "fresas", price: 2, image: "assets/strawberry.png" },
  { name: "limones", price: 1, image: "assets/lemon.png" },
  { name: "uvas", price: 4, image: "assets/grapes.png" },
];

//THE ONLOAD FUNCTION

window.onload = function () {
  console.log("cargando la web");
  loadElements();
};

//THE ELEMENT LOAD FUNCTION

function loadElements() {
  setHeader();
  document.body.appendChild(header$$);
  setMain();
  document.body.appendChild(main$$);
  setFooter();
  document.body.appendChild(footer$$);
}

//THE HEADER LOAD FUNCTION

function setHeader() {
  //the logo
  let logoDiv = document.createElement("div");
  logoDiv.className = "logo-container";
  let logoImg = document.createElement("img");
  logoImg.src = "./assets/fresa.png";
  logoDiv.appendChild(logoImg);
  header$$.appendChild(logoDiv);
  //the title
  let titleDiv = document.createElement("div");
  let titleH1 = document.createElement("h1");
  titleH1.innerHTML = "FRUTERÍA PACO";
  titleDiv.appendChild(titleH1);
  header$$.appendChild(titleDiv);
  //the navigation
  let nav = document.createElement("nav");
  let anchor1 = document.createElement("a");
  let anchor2 = document.createElement("a");
  anchor1.setAttribute("href", "#");
  anchor1.innerHTML = "¿Donde Estamos?";
  anchor2.setAttribute("href", "#");
  anchor2.innerHTML = "Contacto";
  nav.appendChild(anchor1);
  nav.appendChild(anchor2);
  header$$.appendChild(nav);
}

//THE MAIN LOAD FUNCTION

function setMain() {
  for (let i = 0; i < data.length; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item-container";
    itemDiv.setAttribute(
      "onclick",
      `addItem('${data[i].name}', '${data[i].price}')`
    );
    //the fruit image
    let imgDiv = document.createElement("div");
    imgDiv.className = "img-container";
    let fruitImg = document.createElement("img");
    fruitImg.src = data[i].image;
    //the fruit name
    nameDiv = document.createElement("div");
    nameDiv.className = "fruit-name";
    nameDiv.innerHTML = data[i].name;
    //the fruit price
    priceDiv = document.createElement("div");
    priceDiv.className = "fruit-price";
    priceDiv.innerHTML = data[i].price + "€";
    //loading elementss to main
    imgDiv.appendChild(fruitImg);
    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(nameDiv);
    itemDiv.appendChild(priceDiv);
    main$$.appendChild(itemDiv);
  }
  let buyListTitle = document.createElement("div");
  buyListTitle.className = "buylist-title";
  buyListTitle.innerHTML = "Mi lista de la compra";
  listDiv$$.appendChild(buyListTitle);
  main$$.appendChild(listDiv$$);
}

//  THE BUYLIST LOAD

function addItem(name, price) {
  console.log("hola");
  let itemDiv = document.createElement("div");
  let itemName = document.createElement("div");
  itemName.innerHTML = name;
  let itemPrice = document.createElement("div");
  itemPrice.innerHTML = price + "€";
  itemDiv.appendChild(itemName);
  itemDiv.appendChild(itemPrice);
  listDiv$$.appendChild(itemDiv);
}

//THE FOOTER LOAD SECTION

function setFooter() {
  let footDiv = document.createElement("div");
  footDiv.className = "foot-div";
  footDiv.innerHTML = "Fruteria Paco S.L. Todos los derechos reservados.";
  footer$$.appendChild(footDiv);
}
