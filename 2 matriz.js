function sumarMatriz(matriz) {
    let suma = 0;
    let i, j;

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j];
        }
    }

    return suma;
}


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let resultado=sumarMatriz(matriz);
console.log(resultado)
