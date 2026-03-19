function totalPaginas(biblioteca) {
    let total = 0;

    biblioteca.libros.forEach((libro)=> {
        total = total + libro.paginas;
    });

    console.log(`el total de paginas es: ${total}`);
}

let biblioteca = {
    nombre:"Biblioteca",
    libros:[
        {titulo:"La pampara", 
        paginas:550},
        {titulo:"El care monda", 
        paginas:320}
    ]
};
totalPaginas(biblioteca);
