//uma empressa dejeja fazer palestras separadas com assundos diversos para cada tipo de funcionario em su empresa.
//Nesse sentido, se o funcionario é Gerente deve ir para a sala 404
//se for desenvolvedor back end deve ir para a sala 403
//se for desenvolvedor front end deve ir para a sala 402
//se for suporte deve ir para a sala 401
//se não for nenhum dos caso deve perguntar oque está fazendo ali 



let funcionario = 'desenvolvedor back end';

switch (funcionario) {
    case 'gerente':
        console.log('deve se dirigir a sala 404')
        break;
    case'desenvolvedor back end':
        console.log('deve se dirigir a sala 403')
        break;
    case'desenvolvedor front end':
        console.log('deve se dirigir a sala 402')
        break;
    case'suporte':
        console.log('deve se dirigir a sala 401')
        break;
    default:
        console.log('oque vc está fazendo aqui ')
        
        break;
}