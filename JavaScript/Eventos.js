$(document).ready(function(){
		
	$("#bienve").ready(function(){
		var Images = new Array(
			'image/universitarios.png',
			'image/universitarios2.png',
			'image/universitarios3.png',
			'http://tusimagenesde.com/wp-content/uploads/2016/07/universitarios-1.jpg');
		var Aux=[];
			cargar();
		
		function cargar(){
			if($("#pres").attr("src")=="" | $("#pres").attr("src")==Aux[0]){
				$("#pres").attr("src", Images[0]);
				var mostrado=Images[0];
				Images.shift();
				Aux.push(mostrado);

				/*document.getElementById("pres").src=Images[0];*/
			}
			else{			
				
				if(Images.length==0){
					while(Aux.length>0){
						Images.push(Aux.shift());
					}
				}else{
					document.getElementById("pres").src=Images[0];
					var mos = Images.shift();
					Aux.push(mos);
					
				}
				
				}
			}
			
			
		setInterval(function(){			
			cargar();
			}, 5000
			);			
	});

	$("button#bi").click(function(){
		$("#navegacion-fm").css("display", "block");

	});


	$("#PRizq").mouseout(function(){
		$$("#navegacion-fm").css("display", "none");
	});

});



