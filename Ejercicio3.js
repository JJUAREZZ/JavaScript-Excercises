/*Ejercicio: "La Mejor Racha"
En la familia Madrigal, también tienen un premio para la mejor racha de puntajes consecutivos. Para esto, se elige el jugador que haya tenido la mayor suma de puntajes consecutivos en algún mes. Los puntajes de cada competencia se registran en una matriz, donde cada columna es un jugador y cada fila es el puntaje de ese jugador en un mes.

Objetivo:
Escribe una función que reciba la matriz de puntajes y devuelva la mayor suma de puntajes consecutivos de un jugador a lo largo de los meses.

Ejemplo
Entrada:

puntajes = [
    [40, 157, 181, 110],
    [179, 50, 121, 157],
    [87, 176, 60, 108],
    [88, 63, 174, 70],
    [136, 120, 179, 177]
] */

let puntajes = [
        [40, 157, 181, 110],
        [179, 50, 121, 157],
        [87, 176, 60, 108],
        [88, 63, 174, 70],
        [136, 120, 179, 177]]

function mejorRacha(puntajes){
    let rachas = []

    for(let i = 0; i < puntajes[0].length; i++){
        let suma = 0;
        for(let j = 0; j < puntajes.length; j++){
            suma += puntajes[i][j];
        }
        rachas.push(suma);
        console.log(rachas);
    }

    return Math.max(...rachas);
}

function mejorRachaMejorado(puntajes){
    puntajes.reduce((sum, item) => )
}
console.log(mejorRacha(puntajes));