//Faça um algoritmo que efetue o cálculo de quantidade de litros de combustivel gastos em uma viagem, sabendo-se que o carro faz 12km com um litro.
//Deverão ser fornecidos o tempo gasto na viagem e a velocidade média. Utilizar as seguintes fórmulas
//o algoritimo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem 

var tempo = 10;
var velocidade = 100;

var distancia= tempo*velocidade;

var  litros = distancia/12;

console.log("a quantidade de litros gastos em uma viagem de "+tempo+"horas e de velocidade media de "+velocidade+"km/h foi de"+litros+" Litros");