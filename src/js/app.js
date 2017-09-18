var copart_ns = {
	init:function(){
		$.ajax({
			url:'https://swapi.co/api/people/1/',
			type:'GET',
			crossDomain:true,
			success:function(data){
				
				//for(var i = 0; i < data.films.length; i++){
					//$('#usersList').append("<li><h2>"+ data.name+"</h2><p>"+data.height+"</p></li>")
					$('#name').val(data.name);
					$('#height').val(data.height);
					$('#mass').val(data.mass);
					$('#hair_color').val(data.hair_color);
					$('#skin_color').val(data.skin_color);
					$('#eye_color').val(data.eye_color);
					$('#birth_year').val(data.birth_year);
					$('#gender').val(data.gender);

				//}
			},error:function(data){
				console.log("error");
			}
		})
	}
}

$(document).ready(function(){
	copart_ns.init();
})