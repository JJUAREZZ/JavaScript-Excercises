/*En la familia Madrigal, hacen una competencia de generala mensual y al final del año dan distintos premios. Uno de esos premios se llama "El peor de los mejores". Para saber quien gana este premio se agarran a todos los que ganaron cada mes y se busca al que tuvo peor puntaje entre ellos.
 
Los puntajes de cada competencia son anotados en una matriz donde cada columna es un integrante y cada fila es su puntaje de ese mes. A veces no juegan todos los meses así que la matriz podría no tener 12 filas.
 
Dado una matriz con los puntajes, crear una función que devuelva el puntaje del ganador del premio "El peor de los mejores".
 
Ejemplo
Si la tabla de puntajes es la siguiente. ¿Cuál es "el peor de los mejores"?
 
[
 [40, 157, 181, 110],
 [179, 50, 121, 157],
 [87, 176, 60, 108],
 [88, 63, 174, 70],
 [136, 120, 179, 177]
]*/

let puntajes = [[40, 157, 181, 110],
                [179, 50, 121, 157],
                [87, 176, 60, 108],
                [88, 63, 174, 70],
                [136, 120, 179, 177]]

let losMejoresDelAnio = []

function peor(puntajes) {
    let elMejorDelMes = 0;
    for(let i = 0; i < puntajes.length; i++){
        //for(let j = 0; j < puntajes[0].length; j++){
            elMejorDelMes = Math.max(...puntajes[i]);
        //}
        losMejoresDelAnio.push(elMejorDelMes);
    }
    let elPeorDeLosMejores = Math.min(...losMejoresDelAnio);
    
    return elPeorDeLosMejores;


	/*let mejores = puntajes.map(mes => Math.max(...mes), console.log(mes));
	return Math.min(...mejores);*/
}

function elPeorMasEficiente(puntajes){
    let losMejores = puntajes.map(elMejorDelMes => Math.max(...elMejorDelMes));
    return Math.min(...losMejores);
}

     

console.log(peor(puntajes));
console.log(elPeorMasEficiente(puntajes));
