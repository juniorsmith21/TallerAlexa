function valorInventario(p) {
    let total = 0;
    
    p.forEach((p)=> {
        total = total + (p.precio * p.stock);
    }
);
    
    console.log(`Tienes un total en tu inventario de: ${total}`);
}
let p = [
    {nombre:"Lamina de trapezoidal",
     precio:550000,
     stock:24},
    {nombre:"Taladro",
    precio:100000,
    stock:32}


];

// LLAMADO
valorInventario(p);