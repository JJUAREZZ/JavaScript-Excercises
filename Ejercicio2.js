/*Remy necesita proveer a todo el restaurante con los ingredientes necesarios cada día. Por eso cada mañana tiene que ver todo su inventario y comprar lo necesario. Nos pidió que lo ayudemos a armar la lista. 
 
Dada un archivo de inventario que contiene las cantidades de cada ingrediente en stock y otro archivo de límite que contiene las cantidades que se necesitan tener de cada ingrediente. Crear un tercer archivo que contenga cuanto hay que comprar de cada ingrediente.
 
Aclaraciones:
- Se puede asumir que todos los ingredientes del archivo inventario.txt van a estar en el archivo limite.txt
- No se puede asumir que los ingredientes van a estar en el mismo orden en uno y otro archivo
- Si para un ingrediente no hace falta comprar entonces no tiene que estar en el archivo salida.txt
 
inventario.txt
carne;1000
caldo;300
harina;300
huevos;20
arvejas;200
 
limite.txt
huevos;30
arvejas;100
caldo;700
harina;500
carne;800
 
salida.txt
caldo;400
harina;200
huevos;10 */

const fs = require('fs');
const inventario = fs.readFileSync('c:\\Users\\joaco\\OneDrive\\Documentos\\Proyectos\\Ejercicios de Entrevista JS\\inventario.txt', 'utf-8');
const limite = fs.readFileSync('c:\\Users\\joaco\\OneDrive\\Documentos\\Proyectos\\Ejercicios de Entrevista JS\\limite.txt', 'utf-8');
const inventarioArray = inventario.split('\n');

const limiteArray = limite.split('\n');
let salida = [];
let salidaString = '';
let ingredientes = {};
let ingredientesLimite = {};

inventarioArray.forEach(ingrediente => {
    let ingredienteArray = ingrediente.split(';');
    ingredientes[ingredienteArray[0]] = parseInt(ingredienteArray[1]);
});
console.log(ingredientes);

limiteArray.forEach(ingrediente => {
    let ingredienteArray = ingrediente.split(';');
    ingredientesLimite[ingredienteArray[0]] = parseInt(ingredienteArray[1]);
});    

for (let ingrediente in ingredientesLimite){    
    let cantidad = ingredientesLimite[ingrediente] - ingredientes[ingrediente];
    if(cantidad > 0){
        salida.push(`${ingrediente};${cantidad}`);
    }
}   
console.log(salida);
salidaString = salida.join('\n');
fs.writeFileSync('salida.txt', salidaString);   
