let edad = prompt("Ingrese su edad");

if( edad>0 && edad<=12){
    console.log("Es niño");
}
else if ( edad >= 13 && edad<19){
    console.log("Es adolecente")
}
else if (edad >=20 && edad<=60){
    console.log ("Es Adulto")
}
else if (edad >= 60){
    console.log("Es Adulto Mayor")
}
