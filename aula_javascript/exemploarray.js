var frutas = ["Manga","banana","laranja","abacate"];
console.log(frutas)
//colocar em uma posicao expecifica ja existente
frutas[3]="jumbo";
console.log(frutas)
//colocar em uma posicao expecifica a mais
frutas[4]="melão";
console.log(frutas)
// colocando elemento no final do array
frutas.push("caqui")
console.log(frutas)
// retirando o ultimo elemento do array
frutas.pop()
console.log(frutas)
//retirar o rpimeiro elemento do array
frutas.shift()
console.log(frutas)
// colocar  elemento na primeira posição
frutas.unshift("morango")
console.log(frutas)

//retirar elemento de uma posicao especifica
//primeiroparametro é a posicao que quero tirar
//segundo parametro é a quantidade que quero tirar
// e se quiser pode botas um elemneto dps que ele substituira

frutas.splice(1,1,"tangerina");

console.log(frutas)

//descobrir a posicao de um elemento 
var posicao=frutas.indexOf('tangerina')
console.log(posicao)



for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    
}