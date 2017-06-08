  $(document).ready(function(){


   $('#submitweather').click(function(){
    var city = $("#city").val();

    if(city != ''){
    	$.ajax({

      url:"http://api.openweathermap.org/data/2.5/weather?q="+ city  +"&APPID=d2e2d4c99074a497676d4e79f53eb0e9",
      type:"GET",
     dataType:"jsonp",
     success: function(data){
     	console.log(data);
     }
    	});


    	}else{

    	$("#error").html('field cannot be empty');
    }

   });



 });