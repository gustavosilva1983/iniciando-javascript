var num = 10

if (num < 10) {
	console.log(num + " es menor que 10")
}else if (num > 10) {
	console.log(num + " es mayor que 10")
}else {	
		console.log(num + " es igual a 10")
}


//operadores logicos

var num2 = 8

if (num2 >= 10 && num2<=20) {
	console.log(num2 + " esta entre 10 y 20")
}else{
	console.log("el " + num2 + " no esta entre 10 y 20")
}


//

var color = "rojo";

if (color == "negro" || color == "azul") {

	console.log("el " + color +" es una excelente eleccion");
} else{
	console.log("ese color no es agradable")
}

//operacion condicional (ternario)

 var num3 = 15

 num >= 10 ? console.log(num3 + " es mayor o igual a 10") : console.log("el " + num3 + " es menor que 10")

 