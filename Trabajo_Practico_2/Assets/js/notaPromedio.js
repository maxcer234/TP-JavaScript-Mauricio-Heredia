let nota1 = parseInt(prompt("Ingrese su primera nota"));
let nota2 = parseInt(prompt("Ingrese su segunda nota"));
let nota3 = parseInt(prompt("Ingrese su tercera nota"));

if (nota1 < 1 || nota1 > 10) {
    console.log("Error: Ingrese una nota válida para nota1 (1-10)");
  } else if (nota2 < 1 || nota2 > 10) {
    console.log("Error: Ingrese una nota válida para nota2 (1-10)");
  } else if (nota3 < 1 || nota3 > 10) {
    console.log("Error: Ingrese una nota válida para nota3 (1-10)");
  } else {

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio <= 3) {
      console.log("Nota insuficiente");
    } else if (promedio <= 5) {
      console.log("Nota Regular");
    } else if (promedio <= 7) {
      console.log("Nota Buena");
    } else if (promedio <= 9) {
      console.log("Nota Muy Buena");
    } else if (promedio === 10) {
      console.log("Nota Sobresaliente");
    } else {
      console.error("Error: Se ha producido un error al calcular el promedio.");
    }
  }






