console.log("Ejercicio 1:");

function parimpar(number) {
  if (number % 2 === 0) {
    return console.log(number + " es par");
  } else {
    return console.log(number + " es impar");
  }
}
parimpar(3);
parimpar(2);

console.log("Ejercicio 2:");
function mayor(number1, number2) {
  if (number1 === number2) {
    return console.log("son iguales");
  } else if (number1 > number2) {
    return console.log(number1 + " es mayor que " + number2);
  } else {
    return console.log(number2 + " es mayor que " + number1);
  }
}
mayor(3, 3);
mayor(3, 4);
mayor(5, 2);

console.log("Ejercicio 3:");
function multiplo5(number) {
  if (number % 5 === 0) {
    return console.log(number + " es multiplo de 5");
  } else {
    return console.log(number + " no es multiplo de 5");
  }
}
multiplo5(155);
multiplo5(134);

console.log("Ejercicio 4:");
function contador(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}
contador(5);

console.log("Ejercicio 5:");
function contadorv2(string, number) {
  for (let i = 0; i < number; i++) {
    console.log(string);
  }
}
contadorv2("esta frase se repite 5 veces", 5);

console.log("Ejercicio 6:");
function mostrararray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
mostrararray(["a", "b", "c", "d"]);

console.log("Ejercicio 7:");
function mostrararraymenos5to(array) {
  for (let i = 0; i < array.length; i++) {
    if (i != 5) {
      console.log(array[i]);
    }
  }
}
mostrararraymenos5to([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Ejercicio 8:");
function mostrararraymultiplicado(array, number) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * number);
  }
}
mostrararraymultiplicado([1, 2, 3, 4, 5], 3);
