
// reto uno

var names = ["Simón", "Natalia", "Nayib", "Diana", "Germán"]
for (var i =0; i < names.length; i++) {
	console.log(names[i])
}

//reto 2

var numeros = [1,2,3,4,5]
var num1 = numeros[1]  
var num2 = numeros[3]
var mensaje = "los elementos a imprimir son "+ num1 +" y " + num2
console.log(mensaje)

//reto 3

var arr = ["primero", "segundo", "tercero", "cuarto"]
arr.push("soy el ultimo elemento")
for (var i =0; i < arr.length; i++) {
	console.log(arr[i]);
}

// reto 4 corrigiendo

var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
var newArray = ["Quinto", "Sexto"];
arr.splice(4,0,newArray[0]);
arr.splice(5,0,newArray[1]);


for (var i =0; i < arr.length; i++) {
	console.log(arr[i]);
}

// reto 5 edades

var ages = [12, 3, 5, 44, 18, 2, 55, 26];


for (var i =0; i < ages.length; i++) {
	if (ages[i] >=18) {
		console.log(ages[i]);
	}

	
}







