const prompt = require('prompt-sync')();
const Confirm = require('prompt-confirm');

let unit_value;
let quantityProd;
let total = 0;
let addObjects = true;

function askData() {
  unit_value = prompt('Ingrese el valor unitario del producto: ');
  quantityProd = prompt('Ingrese la cantidad de productos: ');
  total = (unit_value * quantityProd) + total;
  console.log("El total es: " + total + " pesos.");
}

async function cashRegister() {
  while (addObjects === true) {
    askData(total);
    addObjects = await new Confirm('¡Desea añadir mas objetos?')
      .run();
  }
  console.log("El total es: " + total + " pesos, gracias por su compra.");
}
cashRegister();
