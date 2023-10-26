const numeros = [5,3,2,7,12,32,65,12];
const numerosDobrados = numeros.map(function(valor,indice){
    return indice
})

console.log(numerosDobrados);

const pessoas = [
    {nome:'Luiz',idade:23},
    {nome:'Sara',idade:23},
    {nome:'Alberto',idade:23},
    {nome:'carlos',idade:23},
    {nome:'Eduardo',idade:23},
    {nome:'Carla',idade:23},
    {nome:'Luiz',idade:23}
]

const nomes = pessoas.map(function(valor){
    return valor.nome
})

const nomes_v2 = pessoas.map(valor => valor.nome)

const pessoaComId = pessoas.map(function(valor,indice){
    valor.id=indice
    return valor
})



const novoObjeto = pessoas.map(function(valor,indice){
    const newObj = {...valor}
    newObj.id=indice
    return newObj
})



console.log(nomes)