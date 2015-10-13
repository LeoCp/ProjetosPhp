$(document).ready(function(){
  $.ajax({
  type:'get',
  url:"arquivo.php",
  data: { titulo:"testando"},
  }).done(function(data){
   $(".cpp").html(data);
  });

});
