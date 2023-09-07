const date =new Date()
date.getDay()

switch (date) {
    case 0,6:
        console.log('final de semana')
        break;

    default:
        console.log('dia de semana')
        break;
}