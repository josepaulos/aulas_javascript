const Pessoas = [
    {nome:'Jose',idade:23,sobrenome:'Sappi'},
    {nome:'Maria',idade:23,sobrenome:'Cardinele'},
    {nome:'Joana',idade:23,sobrenome:'Santos'},
    {nome:'Giovanna',idade:23,sobrenome:'Sappi'},
    {nome:'Carlos',idade:23,sobrenome:'Brasil'},
    {nome:'Ricardo',idade:23,sobrenome:'Silva'},
    {nome:'Felipe',idade:23,sobrenome:'Mello'}
    
]

var novasPessoas = Pessoas.map((valor,indice)=>{
    let item={}
    item.nomeCompleto = valor.nome+' '+valor.sobrenome;
    item.id = indice;
    return item
})

console.log(novasPessoas)