function promedioEstudiantes(estudiantes) {
    let i, j, suma;

    for (i = 0; i < estudiantes.length; i++) {
        suma = 0;


        for (j = 0; j < estudiantes[i].notas.length; j++) {
        
            suma = suma + estudiantes[i].notas[j];
        }

        let promedio = suma / estudiantes[i].notas.length;



        console.log(`Promedio de ${estudiantes[i].nombre} es:${promedio}`);




    }
}
let estudiantes = [
    {nombre:"Camilo",
     notas:[4.0,5.0,3.0]},

    {nombre:"Pedrito",
     notas:[3.0,2.0,4.0]}
];


promedioEstudiantes(estudiantes);