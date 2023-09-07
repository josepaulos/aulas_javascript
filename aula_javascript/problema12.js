// Se vc tem muitas condições , vc pode usar o switch em vez de usa if,elseif diversas vezes

var a =3;
switch (a) {
    case 0:
        console.log("O numero é zero");
        break;//se não tivaer um break ele vai seguir todas as opções 
    case 1:
        console.log("o numero é um");
        break;
    case 2:
        console.log("o nmero é dois");
        break;

    default:
        console.log("não é nem zero, um ou dois")
        break;
}