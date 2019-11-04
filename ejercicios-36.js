
//ejercicio2//
// let numero = prompt ("Por favor ingresá un número")
// if (numero % 2 ===0) { alert (`El número ingresado es par`)}
// else { alert ('El número es impar')};

// //ejercicio 3 //
// let edad = prompt ("Por favor ingresá tu edad")
// if (edad >= 18 ) { alert ( `Usted es mayor de edad`)}
// else { alert ( `Usted es menor de edad`)};

// //ejercicio 1 con else//
// if (usuarioIngresado === usuario) {
//     let passwordIngresado = prompt(`Cual es tu password?`)
//     if (passwordIngresado === password) {
//       alert(`Bienvenide, ${usuario}`)
//     };
//   }
//   else {
//     alert(`Ingresaste mal tus datos, por favor intentalo nuevamente`)
//   };
  
  //ejercicio con operador ternario//

// let numero = prompt ("Por favor ingresá un número")
// numero % 2 ===0 ? alert (`El número ingresado es par`):alert ('El número es impar');
// let edad = prompt ("Por favor ingresá tu edad")
// edad >= 18 ? alert ( `Usted es mayor de edad`) : alert ( `Usted es menor de edad`);

//EJERCICIO 6
// let horaActual = prompt(`Hola, qué hora es?`)

// if (horaActual >=5 && horaActual <=12) {alert ("Buen día")}
// else if (horaActual >=13 && horaActual <=20) {alert ("Buenas tardes")}
// else {alert ("Buenas noches")};


//Ejercicio 7 //

let calificación = prompt("Por favor ingrese la calificación obtenida");
if (calificación > 10) {alert ("El dato es incorrecto. Por favor ingrese un número entre 0 y 10")}
else if (calificación >= 9) {alert (`La nota es excelente`)}
else if (calificación < 9 && calificación >= 6) {alert ("La nota es buena")}
else {alert ("El exámen está desaprobado")};
