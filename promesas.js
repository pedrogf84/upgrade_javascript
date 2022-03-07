//PROMESAS

/* JS es monohilo, por lo que si se necesita información de una base de datos 
(que tarda más que la ejecución del código.) hay que "prometer" que la información
llegará.

Las promesas tienen dos estados: resolve y reject
*/

const addFood = (food, foodList) => {
  const promiseFood = new Promise((resolve, reject) => {
    if (!foodList || !food) reject("params incomplete");

    //simulamos asincronia con la funcion setTimeOut.
    setTimeout(() => {
      foodList.push(food);
      resolve(foodList);
    }, 2000);
  });

  return promiseFood;
};

const list = ["patata", "tomate", "aguacate"];

//then se utiliza para indicar que retome la funcion en el momento en el que se cumple la promesa.
addFood("lechuga", list)
  .then((list) => {
    console.log(list);
  })
  .catch((error) => {
    throw new Error(error);
  });

//CALLBACKS

const suma = (a, b) => {
  return a + b;
};

const saludar = (nombre) => {
  return `hola ${nombre}!!`;
};

const myCalback = (nombre, a, b) => {
  console.log(saludar(nombre));
  console.log(suma(a, b));
};

myCalback("garny", 2, 3);
//Asinc await
//le indicamos a nuestras funciones que son asincronas, que deben esperar
//a que llegue algun dato.
