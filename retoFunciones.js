// reto 1

function Presentation(nombre, apellido) {
	return "mi nombre es "+ nombre + " y mi apellido es " + apellido;
}

console.log(Presentation("Jose Gustavo","Silva Portilla" ))
console.log(Presentation("Jorge Alberto","Silva Pacheco" ))
console.log(Presentation("Maria C","Portilla Valbuena" ))

function sum(num1,num2) {
	return num1 + num2
}
console.log(sum(10, 20));  // 30
console.log(sum(10, 10));  // 20
console.log(sum(40, 60));  // 100
console.log(sum(50, 200));  // 250

/* corregir function sayMyName(name) {
  return ("Tu nombre es " + name);
}

var name = "Nayib";
sayMyName(name);
*/

function sayMyName(name) {
  return ("Tu nombre es " + name);
}

var name = "Nayib";
console.log(sayMyName(name));