
var strings = "Hola mundo"
 for (var i =  0; i < strings.length; i++) {
 	console.log(strings[i]);
 }

 // reto 1 retornando caracteres
"Hola mundo"[3]; // a
"    "[2];//" "
"Estoy aprendiendo"[7];// p
"El azul es mi color favorito"[12];//i
""[0];//undefined
" El cielo es azul"[20];//undefined

// reto 2 contado caracteres
function countingEs(str) {
	var count = 0
	var i = 0
	while(i < str.length){
		i += 1
		if (str[i] === 'e') {
 	  	count += 1
 	  }
	}	
 console.log(count)
 return count
}
console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5) // true

// reto 3 uniendo cadenas
function message(array) {
	var stringMessage = array.join(" ")
	return stringMessage
}
console.log(message(["Estoy", "aprendiendo", "Java", "Script"]));
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"]));
console.log(message(["Java", "Script", "es", "muy", "útil"]))

// reto 4 Generador de contraseñas

function generatePassword(string){

	var	password = "";

	for (var i = 0 ; i < string.length; i++) {

		var char = string[i].toLowerCase()

		if (char === ' ') {
		 	char = '';
		}else if(char === 'a'){
		 	char = 4
		}else if(char === 'e'){
			char = 3
		}else if(char === 'i'){
			char = 1
		}else if(char === 'o'){
			char = 0
		}

		password += char
	}
		
	return password 
}

console.log(generatePassword("Hola"));
console.log(generatePassword("esta es una prueba"));
console.log(generatePassword("")); // ""
console.log(generatePassword("no me la se *"));



function capitalize(string) {
	var words = string.split(' ');
		for (var i = 0 ; i < words.length; i++){
			var chars = words[i].split(''); 
				chars[0] = chars[0].toUpperCase();	
				words[i] = chars.join('');
		}
	return words.join(' ');
}

console.log(capitalize("pedro perez"));
console.log(capitalize("make it real"));


 