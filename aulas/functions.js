
function imprimetexto (){
    const texto = "Hello world"
    console.log(texto)
}
function imprimetextonoparametro (texto){
    
    console.log(texto)
}

imprimetexto()
imprimetextonoparametro("Olá mundo")

function soma(){
    const result = 2 + 2;
    console.log(result)
}

soma()

function operacoes(num1, num2){    
    return num1 * num2; 
    
}

console.log(operacoes(60, 3));
console.log(operacoes(-300, 20));
console.log(operacoes(15,40));

function ope(num1=4, num2=3){
    
    return num1 * num2;
    
    
}
console.log(ope())

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('fael')   

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   console.log(operacaoMatematica(15, 30, 45))