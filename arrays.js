var array = [1, "Pedro", true, false, "Juan"];
//cambiando elementos del arreglo
array[1]= "Gustavo";
array[4]= "pablo";
//agregando elementos al arreglo
array.push("Ana");
array.splice(3,0,"Maria");
//eliminando elementos
array.splice(1,1);

//recorriendo un areglo
for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
}



