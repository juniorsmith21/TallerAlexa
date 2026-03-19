function nombresMayusculas(lista) {
    let nuevos = lista.map((persona) => {
        return {
            nombre: persona.nombre.toUpperCase()
        };
    });

    return nuevos;
}

let personas = [
    {nombre:"kevin"},
    {nombre:"Gerardo"},
    {nombre:"Chimuelo"}
];


let resultado1 = nombresMayusculas(personas);
console.log(resultado1);