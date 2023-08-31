//Construa um algoritimo que leia dois numeros e efetue a adição. 
//Caso o valor somado seja maior que 20, este devera ser apresentado somando-se a ele mais 8; 
//caso o valor somado sela menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.

var num1 = 23;
var num2 = 10;
var resultado = num1 + num2;
if (resultado > 20) {
    console.log(resultado+8)
}else if(resultado <= 20){
    console.log(resultado-5)
}