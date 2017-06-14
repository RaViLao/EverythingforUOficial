$(document).ready(function(){
		
	$("#bienve").ready(function(){
		var Images = new Array(
			'images/universitarios.png',
			'images/universitarios2.png',
			'images/universitarios3.png');
			cargar();
		
		function cargar(){
			var index=Math.floor((Math.random()*Images.length));
			document.getElementById("pres").src=Images[index];
		}
			
		setInterval(function(){			
			cargar();
			document.getElementById("pres").src=Images[index];
			}, 5000
			);			
	});
});



