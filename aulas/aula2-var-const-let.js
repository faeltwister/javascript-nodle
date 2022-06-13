var altura = 5;
var comprimento = 7;

//area = altura * comprimento
//console.log("com var deu: ",area)

let altura1 = 5;
let comprimento2 = 7

//area1 = altura1 * comprimento2
//console.log("com let deu: ",area1)

let forma = "retangulo"
let area;
if(forma==='retangulo'){
    area = altura * comprimento
}else{
    area = (altura * comprimento)/2
}
console.log(area)

//Var não é mt usado pq gera bugs
//let valor q vai ser mudado
//const valor q não vai ser alterado
