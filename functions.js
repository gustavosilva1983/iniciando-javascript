// sintaxis

function hello() {
	console.log("hola mundo");
}

hello()

// argumentos

function hello(name) {
	console.log("hola " + name)
}

hello("Juan")
hello("Pedro")

// retornando un valor

function hello(name) {
	return "hola " + name;
}

var nombre = hello ("Gustavo")
console.log(nombre)


console.log(hello("Jose"))

//ejemplo crear una funcion que calcule el peso corporal IMC(indice de masa corporal)

function IMC(peso, altura) {
	return peso / altura ** 2
}

console.log("Tu masa corporal es: "+ IMC(83,1.80));


