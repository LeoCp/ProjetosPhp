$(document).ready(function(){

  $.ajax({
  type:'get',
  url:"paginaslidas.php",
  data: { titulo:"testando"},
  }).done(function(data){
   $(".lids").html(data);
  });

});


function starts () {
 if(document.getElementById("To").selected ){
		 $.ajax({
 		 type:'get',
 		 url:"todos.php",
		 data: { titulo:"testando"},
  		}).done(function(data){
   		$(".cpp").html(data);
  		});

 	}else if(document.getElementById("El").selected ){
	 	
	 	 $.ajax({
 		 type:'get',
 		 url:"estoulendo.php",
		 data: { titulo:"testando"},
  		}).done(function(data){
   		$(".cpp").html(data);
  		});

	 }else if(document.getElementById("Jl").selected){
	 	$.ajax({
 		 type:'get',
 		 url:"jali.php",
		 data: { titulo:"testando"},
  		}).done(function(data){
   		$(".cpp").html(data);
  		});

	 }else{
	 	
	 	 $.ajax({
 		 type:'get',
 		 url:"naoli.php",
		 data: { titulo:"testando"},
  		}).done(function(data){
   		$(".cpp").html(data);
  		});

	 }

}
 
function startsCadastra () {
	var x;
	if(document.getElementById("one").checked){
		x = 1;
	}else if(document.getElementById("two").checked){
		x = 2;
	}else if(document.getElementById("three").checked){
		x = 3 ;
	}
	
	$.ajax({
 		 type:'post',
 		 url:"enviar.php",
		 dataType:'html',
		 data:{
		 	'nomelivro': $("#nomelivro").val(),
		 	'nomeautor': $("#nomeautor").val(),
		 	'numeropaginas': $("#numeropaginas").val(),
		 	'estadolivro': x

		 }
  		}).done(function () {
  			alert("Tudo certo cachueris");
  			 $("#nomelivro").val('');
		 	 $("#nomeautor").val('');
		 	 $("#numeropaginas").val('');
		 	if(document.getElementById("one").checked){
				$("#one").prop("checked", false);
			}else if(document.getElementById("two").checked){
				$("#two").prop("checked", false);
			}else if(document.getElementById("three").checked){
				$("#three").prop("checked", false);
			}
	
		 	
  		});


}

function startsLidas () {
			
			var x = $('#leocpp').find(":selected").text();
			alert(x)
	
}
