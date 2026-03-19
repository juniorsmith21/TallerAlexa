function buscarNumero(matriz, numero) {
    let f, c;

    for (f = 0; f < matriz.length; f++) {
        for (c = 0; c < matriz[f].length; c++) {
            if (matriz[f][c] == numero) {
                console.log(`fila: ${f} columna:${c}`)
            }
        }
        }
}

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


buscarNumero(matriz, 1);