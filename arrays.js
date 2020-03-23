// Arrays
// Tendo os arrays ['ES', 'MG', 'RJ', 'SP', 'MT'] e ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'], 
// percorra os vetores dados e crie um outro com a seguinte estrutura: 
// ['MT' => ''Mato Grosso'', 'ES'=>'Espírito Santo', 'MG'=>'Minas Gerais', 'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo']. 
// Depois de criado terceiro vetor, leia-o e imprima em cada linha a chave de cada posição e seu respectivo valor separados por "-".

let state = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
let shortState = ['ES', 'MG', 'RJ', 'SP', 'MT'];

let response = state.map(st => {
    let shortFind = st.split(' ');
    let responseShort = shortState.find(x => x == `${shortFind[0][0]}${shortFind[shortFind.length-1][0]}`);
    return `${responseShort} => ${st}`
})

response.forEach((value, index) => {
    console.log(`${index} - ${value}`)
})
