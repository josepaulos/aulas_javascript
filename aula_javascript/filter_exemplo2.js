var produtos = [
    {id:1,descricao:"Smartphone",categoria:'Eletronicos'},
    {id:2,descricao:"nootbook",categoria:'Eletronicos'},
    {id:3,descricao:"geladeira",categoria:'Eletrodomesticos'},
    {id:4,descricao:"Liquidificador",categoria:'Eletrodomesticos'},
    {id:5,descricao:"Air fryer",categoria:'Eletrodomesticos'},
]

function retornarEletroico(value){
    if(value.categoria == 'Eletronico'){
        return value
    }


    
}

var produtosEletronicos = produtos.filter(retornarEletronicos);


produtosEletronicos.forEach(produtosEletronicos => {
    console.log(produtoEletro)
})
