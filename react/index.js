function loadXMLDoc(){	//标准ajax 请求
	$.ajax({
		url:'http://127.0.0.1:7002/getDogs',
		type:'POST',
		dataType:'json',


		success:function(data){
			console.log('succeed');
		},

		error:function(error){
			console.log('filed')
		}

	})
}

//原生http请求

function loadXMLDoc2(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatuechange = function(){
		if(xmlhttp.readystatue == 4 && xmlhttp.status ==200){
			$("#button").html = xmlhttp.respondseXML;
		}
	}

	xml.open("post",'http://localhost:7002',true);
	xml.send();
}