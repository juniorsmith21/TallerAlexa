function mejorJugador(jugadores) {
    let mejor = ""
    let mayor = 0
    let i, j;

    for (i = 0; i < jugadores.length; i++) {
        let suma = 0;

        for (j = 0; j < jugadores[i].puntos.length; j++) {
            suma = suma + jugadores[i].puntos[j];
        }

        if (suma > mayor) {
            mayor = suma;
            mejor = jugadores[i].nombre;
        }}

    console.log(`El mejor jugador es: ${mayor} ${mejor}`)
}
let jugadores = [
    {nombre:"Smith", 
    puntos:[10,20,30]},
    {nombre:"Junior", 
    puntos:[15,25,10]}
];

mejorJugador(jugadores);