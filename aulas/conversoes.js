
const numero = 1234;
const numerostring = '1234';
//compara os dois e converte em string
console.log("comparação", numero==numerostring);
//o tipo é diferente, pois inteiro é diferente de string
console.log("comparação de tipo", numero===numerostring);
//concatenação
console.log("concatenação de numero e string",numero+ numerostring)
//conversao String() | Number()
console.log("conversão de string para numero",numero+ Number(numerostring))
