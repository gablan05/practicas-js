let inicial = Math.floor(Math.random() * 360);
let aleatorio=(Math.floor(Math.random()*(360*5)))+(360*5)+inicial;


let resultado=aleatorio%360;
  
console.log("\n");
console.log("Posicion o angulo inicial:", inicial);
console.log("Valor Aleatorio Generado en Grados:", aleatorio);
console.log("Angulo Final", resultado);
console.log();
