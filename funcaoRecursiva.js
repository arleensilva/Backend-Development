// Função recursiva
// Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo. 
// Quando encontrá-lo, imprima-o na tela.

function sameDivisor(number){

    number = number ? number : 1;

    if( !(number % 2) && !(number % 3) && !(number % 10)){
        return number;
    }

    return sameDivisor(number +1);
}

let response = sameDivisor(1);

console.log(`O menor número divisível por 2, 3 e 10 é: ${response}`);