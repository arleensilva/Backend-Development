// Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9. 
// Somando esses múltiplos obtemos o valor 23. 
// Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000

let sum = 0;

for(let i = 0; i < 1000; i++){
    if(!(i % 3) || !(i % 5)){
        sum += i;
    }
}

console.log(`A soma dos multiplos é: ${sum}`);