var carros=['Compass','Renegade','Outlander','Tracker','Duster'];
console.log(carros);

//retirar  tracker
carros.splice(3,1);
console.log(carros);

//adcionar o carro 
carros.push("Onix")
console.log(carros);


// retirar o compass
carros.splice(0,1);
console.log(carros);


//trocar Outlander por Pajero TR4
carros.splice(1,1,"Pajero TR4");
console.log(carros);

//adcionar o carro 
carros.push("Tiggo 7")
console.log(carros);

//retitar a Duster do catalogo e mostar sem o Duster
carros.splice(2,1);
console.log(carros);


