

var options =  ['Sin Algo','Faciles','Dificiles'];
$(document).ready(function(){

	var select = $('#recetas');

	for(i=0;i<options.length;i++){
		value = i + 1;
		var option = '<option value="'+value+'">'+options[i]+'</option>';
		select.append(option);
	}


$('.mas').on('click',function(){

	event.preventDefault();

	var vid= $(this).data('id');
	//var id= '#' + vid;
	var receta= '#receta' + vid;
	var prepa= '#prepa'+ vid;
	//preguntar en none o en block//
	console.log($(prepa).css('display'));

	if($(prepa).css('display') === "none"){
		//oculto todos antes
			//$('#receta').hide();
			//$('#prepa').show();		
		$(receta).css('display','none');
		$(prepa).css('display','block');
		console.log($(prepa).css('display'));
	}else{
		if($(prepa).css('display') === "block");
			//$(receta).show();
			$(prepa).css('display','none');
			$(receta).css('display','block');

			console.log($(prepa).css('display'));	

	}

});



	$('#mensaje').hide(); //oculto el div

	$('#newsletter').on('click',function() {
		nombre = $('#nombre').val();
		apellido = $('#apellido').val();
		email = $('#email').val();
		expresion= /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		sololetras= /[a-zA-ZñÑ\s]/;
			

		if (nombre == "" || apellido == "" || email == "") {
			$('#mensaje').show();
			$('#mensaje').append('<p style="background-color:#F9AA34; font-size:20px;">Complete todos los Datos</p>');

		}else{			
		
			if (nombre.length<=2 || !sololetras.test(nombre)){
				$('#mensaje').show();
				$('#mensaje').append('<p style="background-color:#F9AA34; font-size:20px;">Nombre Incorrecto</p>');

			}else{

		    if (apellido.length<=2 || !sololetras.test(apellido)) {
		    	$('#mensaje').show();
		    	$('#mensaje').append('<p style="background-color:#F9AA34; font-size:20px;">Apellido Incorrecto</p>');
		    
		    }else{
			
		    if (!expresion.test(email)) {		    	
      			$('#mensaje').show();
		    	$('#mensaje').append('<p style="background-color:#F9AA34; font-size:20px;">Mail Incorrecto</p>');		

		    }else{	
		    	
		    	$('#mensaje').show();
		        $('#mensaje').append('<p style="background-color:#ACECA1; font-size:20px;">Suscrito con Exito</p>');	
	
			}
		}
	}
	}
	});		
	});	
	
		
		
	






