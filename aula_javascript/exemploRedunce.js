var numeros = [1,2,3,4,5,6]
total = 0 
for(var i =0 ; i<numeros.length;i++){
    total +=numeros[i]
}

console.log(total)


var tot = numeros.reduce(function (total,numero) {
    return total+numero
})


console.log(tot)

const pessoas = [
    {nome:'Luiz',idade:23},
    {nome:'Sara',idade:23},
    {nome:'Alberto',idade:23},
    {nome:'carlos',idade:23},
    {nome:'Eduardo',idade:23},
    {nome:'Carla',idade:23},
    {nome:'Luiz',idade:23}
]



var idades = pessoas.reduce((total,valor)=> {
    return total+valor.idade

},0)
console.log(idades)



const numerosPares = numeros.filter(function (valor) {
    return valor%2 ===0
}).map(function (valor) {
    return valor * 2
}).reduce(function(ac,valor) {
    return ac*valor
});

console.log(numerosPares)