/*
2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await.
*/
const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      console.log("Time out!");
      resolve();
    }, 2000);
  });
  /*
  promise.then(() => {
    console.log("Time out!");
  });*/
};

runTimeOut();

const processFunction = async () => {
  try {
    const result = await runTimeOut();
  } catch (error) {
    console.error("error", error);
  }
};

processFunction();
