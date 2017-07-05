$(document).ready(function(){

		$("#ServAd").click(function(){
        
        $("#ok").css("display", "inline-block");
      });


	$("#BienveP").ready(function(){
		var Images = new Array(
			'Image/universitarios.png',
			'Image/universitarios2.png',
			'Image/universitarios3.png',
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

	var publicidad = new Array (
		'Image/publi1.png', 
		'Image/publi2.jpg',
		'Image/publi3.jpg',
		'Image/publi4.gif'
		);

		cargarPubli();

		function cargarPubli(){
			var index=Math.floor((Math.random()*publicidad.length));
			$("#publicidad").attr("src", publicidad[index]);

		}
		setInterval(function(){			
			cargarPubli();
        }, 18000
        );	
		var b= $("#contacto").offset().top;
    	$(window).scroll(function(){
    	var a= $(window).scrollTop();
    	
    	 
    	 
    	 if(a >=b){
    	 	$("#contacto").css("top", "0");
    	 	
    	 }else{
    	 	$("#contacto").css("top","250px");   	 	}

    	

    });

    	$(".comprar").click(function(){
    	  
    	var usuario = $("#form-username").val();
   		var contra = $("#form-password").val();
   		var name = new Array ('RaViLao', 'jorge', 'july', 'angelfox');
   		var pass = new Array ('paralelepipedo', 'salas', 'quispe', 'curi');

   		var n= 0;
   		var index=0;
   		
   		while(n==0 & index < name.length-1){

   			if(usuario==name[index]){
   			
   				if(contra==pass[index]){
   					n=1;
   				}else{
   					n=3;
   				}
   			}
   				
   				

   			else{
   				alert(name[index] + 'can');
   				index++;   				
   			}}
   		
   			if(n==1){
   			$("#comprar-pro").css("display:none");
   			$(".click").css("display", "block");
   			$(".username").text(usuario);
   			$("#z").text(usuario);
   			$("#reg").css("display", "none");
   			$("#ses").css("margin-left", "100px");

   		}else{
   			$("#form-username").val("");
   			$("#form-password").val("");
   			
   			$("#form-username").attr("placeholder")=="error";
   			$("#form-username").attr("color")=="red";
   			$("#comprar-pro").css("display:none");
   			

   		}

	});


      

   	
    

});



