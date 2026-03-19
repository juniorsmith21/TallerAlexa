function calcularIVA(p) {
    let nuevos = p.map((p)=> {
        return p * 1.19;
    }
);

    return nuevos;
    }


let pr = [100,200,300];

let resultado = calcularIVA(pr);
console.log(resultado);