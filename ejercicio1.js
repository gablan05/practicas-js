
console.log("hola");

for (let i=0; i<10; i++) {
  let aleatorio=(Math.floor(Math.random()*(37*5)))+(37*5);
  let resultado=aleatorio%37;

  console.log("\n");
  console.log("Nro de juego:", i);
  console.log("Valor Aleatorio Generado:", aleatorio);
  console.log("Nro que cayó en la ruleta:", resultado);
  console.log();

}