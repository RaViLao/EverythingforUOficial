$(document).ready(function(){
	
	//esto es para el primer ejemplo
		$(".elemento").click(function(){
			var a = 'hola';
			var ram = $(".elemento").atrr("id");
			alert(ram);
			$("#"+ram).css("border", "1px solid red");
			
		});	
});