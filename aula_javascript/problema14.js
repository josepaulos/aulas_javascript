//descobrir qual o dia da semana utilizando a classe nativa do js que é o Date
//getDay() retorna um numero de 0-6 dempendendo do dia que vc estiver 

const date =new Date()
date.getDay()

switch (date.getDay()) {
    case 0:
        console.log('domingo')
        break;
    case 1:
        console.log('segunda')
        break;
    case 2:
        console.log('terça')
        break;
    case 3:
        console.log('quarta')
        break;
    case 4:
        console.log('quinta')
        break;
    case 5:
        console.log('sexta')
        break;
    case 6:
        console.log('sabado')
        break;

    default:
        console.log('koe')
        break;
}