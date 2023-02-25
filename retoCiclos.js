//reto 1 crear

var i = 0

while(i<50){
	console.log(i + "estoy aprendiendo con while");
	i += 1
}

for (var i = 0; i < 50; i++) {
	console.log(i+" estoy aprendiendo con for");
}


// reto 2 corregir 

/* while (false) {
  console.log("Hola desde el cuerpo del ciclo");
}
*/

var i = 0
 while (i<10) {
  console.log(i +"Hola desde el cuerpo del ciclo con while");
  i = i+1
}

for (var i = 0; i < 10; i++) {
	console.log(i +"Hola desde el cuerpo del ciclo con for");
}

//reto 3 corregir ciclo infinito

var i = 0 

while (i < 2) {
  console.log(i + "Hola desde el cuerpo del ciclo con while");
  i += 1
}

for (var i = 0; i < 2; i++) {
	console.log(i + "Hola desde el cuerpo del ciclo con for");
}

/*corregir bug

for (var i = 0; i < 5; i ++) {
  console.log("Hola mundo");
  i++
}*/

for (var i = 0; i < 5; i ++) {
  console.log("Hola mundo");
 }



