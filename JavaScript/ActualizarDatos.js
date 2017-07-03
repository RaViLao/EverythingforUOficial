

function ActualizarDatos(){
	var nombre = document.getElementById("jnom").value;
	var apellido=document.getElementById("jape").value;
	var correo= document.getElementById("jcor").value;
	var telefono=document.getElementById("jtel").value;

	var sexo;

	if(document.getElementById("jsexm").checked)
		sexo= document.getElementById("jsexm").value;
	else(document.getElementById("jsexf").checked)
		sexo=document.getElementById("jsexf");

	var dia= document.getElementById("jdia").value;
	var mes=document.getElementById("jmes").value;
	var anio=document.getElementById("janio").value;
	var fechanac= dia  + " - " + mes + " - " + anio
	var universidad = document.getElementById("juni").value;
	var pais= document.getElementById("jpais").value;
	var nombreapellido= nombre + " " + apellido;

	GuardarDatos(nombreapellido, correo, telefono, sexo, fechanac, universidad, pais);

}

function GuardarDatos(nombre, apellido, correo, telefono, sexo, fechanac, universidad, pais){

	document.getElementById("unij").innerHTML= universidad;
	document.getElementById("fechanacj").innerHTML=fechanac;
	document.getElementById("sexoj").innerHTML=sexo;
	document.getElementById("paisj").innerHTML=pais;
	document.getElementById("correoj").innerHTML=correo;
	document.getElementById("telj").innerHTML=telefono;
	document.getElementById("changeNombrej").innerHTML=nombreapellido;

	ref();

}

function ref(){
	window.location.assign(PerfilUsuario.html);
}