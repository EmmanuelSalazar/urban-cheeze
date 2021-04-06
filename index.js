alert("Saludos, ¡Bienvenido al perro que pizza!");
alert("¿Que deseas comer: Pizza o perro?");

// Esta variable guarda lo que el cliente escoge; Variable = let
let orden = prompt("Escriba el producto que desee:");

//Perro y pizza
//Perro = 5
//Pizza = 10

let perroPrice = 5;
let pizzaPrice = 10;

if (orden === "perro" && "Perro") {
    alert("Escogiste " + orden + ". Su precio es " + perroPrice + ". Ve a la caja, porfavor.");
}

if (orden === "pizza") {
    alert("Escogiste " + orden + ". Su precio es " + pizzaPrice + ". Ve a la caja, porfavor.");
}