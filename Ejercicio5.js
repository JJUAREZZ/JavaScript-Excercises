/* En la familia Madrigal, tienen una granja con diferentes árboles frutales. Cada árbol produce una cantidad diferente de frutas cada mes, y la producción se registra en una matriz donde cada fila representa un mes y cada columna representa un árbol.

Los Madrigal quieren encontrar el árbol más productivo, es decir, aquel cuya producción total de frutas a lo largo del año haya sido la mayor.

Objetivo:
Escribe una función que reciba la matriz de producción de frutas y devuelva el número de frutas producidas por el árbol más productivo.

Ejemplo
Entrada:
python
Copy
Edit
produccion = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [20, 30, 40, 50],
    [25, 35, 45, 55],
    [30, 40, 50, 60]
] */


let produccion = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [20, 30, 40, 50],
    [25, 35, 45, 55],
    [30, 40, 50, 60]
];




function frutasProducidas(prod){
    let sumDeCadaArbol = [];
    for(let i = 0; i < prod[0].length; i++){
        let suma = 0;
        for(let j = 0; j < prod.length; j++){
            suma += prod[j][i]
        }
        sumDeCadaArbol.push(suma)
    }
    return Math.max(...sumDeCadaArbol)
}

console.log(frutasProducidas(produccion));

function otraForma (prod) {
    let sumDeCadaArbol = []
    for(columna of prod){
        let suma = 0;
        for(fila of prod){
            suma += fila.reduce((acc, num) => acc + num, 0)
        }
        sumDeCadaArbol.push(suma)
    }
    return Math.max(...sumDeCadaArbol)
}

console.log(otraForma(produccion));





