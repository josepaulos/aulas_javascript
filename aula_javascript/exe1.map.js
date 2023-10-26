produtos = ['Geladeira', 'fogão','Coifa'];

function primeiraLetraMaiuscula(valor) {
    return valor.charAt(0).toUpperCase()+valor.slice(1)
    
}

var listaEmMaiusculo = produtos.map(primeiraLetraMaiuscula);

console.log(listaEmMaiusculo)