let numero1 = parseInt(prompt("Ingrese el primer  numero"));
let numero2 = parseInt(prompt("Ingrese el segundo  numero"));
let numero3 = parseInt(prompt("Ingrese el tercer  numero"));
let menor,mayor,medio; 

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
    if (numero2 <= numero3) {
        medio = numero2;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero2;
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
    if (numero1 <= numero3) {
        medio = numero1;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero1;
    }
} else {
    menor = numero3;
    if (numero1 <= numero2) {
        medio = numero1;
        mayor = numero2;
    } else {
        medio = numero2;
        mayor = numero1;
    }
}

console.log("Los números ordenados en forma ascendente son:");
console.log(menor);
console.log(medio);
console.log(mayor);