function contarPares(matriz) {
    let contador = 0;
    let i, j;

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 == 0) {
                contador++;
            } }}

    return contador;
}


let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let resultado2 = contarPares(matriz2);
console.log(resultado2);

