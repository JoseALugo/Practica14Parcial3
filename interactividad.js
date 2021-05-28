function limpiarformulario() {
	document.getElementById("menor").reset();
}

var Calculo = function(n1,n2,n3){
	var num1=parseInt(document.getElementById("num1").value);
	var num2=parseInt(document.getElementById("num2").value);
	var num3=parseInt(document.getElementById("num3").value);
if (num1<num2 && num1<num3){
	var menor=num1;
}
else{
	if (num2<num3){
		menor=num2;
	}
	else{
		menor=num3
	}
}
return "El numero menor es "+menor;
}

function limpiarespacio(){
	document.getElementById("cent").reset();
}
var imprimir= function(n1){
	var cm=parseInt(document.getElementById("cm").value);
	var resultado=cm/2.54;
	return resultado+"pulgadas"
}

function limpiar(){
	document.getElementById("metrs").reset();
}
var ver=function(n1){
	var mts=parseInt(document.getElementById("mts").value);
	var resul=mts*1.094;
	return resul+"yardas"
}