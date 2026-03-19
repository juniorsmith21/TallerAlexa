function Vfila(f){
    let numerosVis=[];
    let verdadero=true;

    f.forEach((num)=>{
        if(numerosVis.includes(num)){
            verdadero=false;

        } else {
            numerosVis.push(num)
        }
    });
return verdadero;
}
let f1 = [5,3,4,6,,8,9,1,2];
console.log("Esta sin problemas la fila 1?", Vfila(f1));

let f2= [5,3,4,6,7,8,9,1,2];
console.log("Esta sin problemas la fila 2?", Vfila(f2));