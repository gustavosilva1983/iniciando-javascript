//cuando es igual a 10

var number = 10

if (number>10) {
	console.log(number + " es mayor a 10")
}  

//Igual o diferente

if (number == 8){
	console.log(number + " es igual a 8")
}else {
	console.log(number + " es diferente a 8")
}

//usando menos lineas

number == 8 ? console.log(number + " es igual a 8"): console.log(number + " es diferente a 8")

//saludando

var time = 18

if (time < 12) {
	console.log("buenos dias")
}else if(time >= 12 && time < 18){
	console.log("buenas tardes")
}else{
	console.log("buenas noches")
}

// reto estas listo

var name1 = "Juan"
var name2 = "Maria"

if (name1 == "Pedro" && name2 == "Maria") {
	console.log("estas listo!!")
}