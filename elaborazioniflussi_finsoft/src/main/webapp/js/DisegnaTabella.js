alert("ok");
var stringa ="";
popolaTabella();
function popolaTabella(){
	$.ajax('http://localhost:8080/resources/flussi',   // request url
		    { 
		        success: function (data) {
		            console.log(data[0]);
		            disTabella(data);
		            $("#miaTabella").html("");
					$("#miaTabella").append(stringa);
		    }
		});

}

function disTabella(data){
	
	stringa+= '<table class="table table-bordered">';
	stringa+= "<tr><th>Id</th><th>Tabella</th></tr>";

  	for(i=0; i<data.length; i++){
  		stringa+="<tr>";
  		stringa+="<td>"+ data[i].id +"</td>";
  		stringa+="<td>" + data[i].tabella + "</td></tr>";
  	}	
  
  stringa+= "</table>"
  return stringa;
}


alert ("corretto");
var stringa1="";
popolaTabella1();
function popolaTabella1(){
	$.ajax('http://localhost:8080/resources/elaborazioni',
			{
				success: function(data){
					console.log(data[0]);
					disTabella1(data);
					$("#miaTabella1").html("");
					$("#miaTabella1").append(stringa1);
				}
			});
}

function disTabella1(data){
	stringa1+= '<table class= "table table-bordered">';
	stringa1+= "<tr><th>Id</th><th>Data-Ora</th><th>Utente</th></tr>";
		
		for (i=0; i<data.length; i++){
			stringa1+="<tr>";
			stringa1+="<td>" + data[i].id + "</td>";
			stringa1+="<td>" + data[i].data + "</td>";
			stringa1+="<td>" + data[i].utente + "</td></tr>";
		}
	stringa1+= "</table>"
		return stringa1;
}

alert("perfetto");
var stringa2="";
popolaTabella2();
function popolaTabella2(){
	$.ajax('http://localhost:8080/resources/flussiversione',
			{
			success: function(data){
				console.log(data[0]);
				disTabella2(data);
				$("#miaTabella2").html("");
				$("#miaTabella2").append(stringa2);
			}
			});
}

function disTabella2(data){
	stringa2+= '<table class= "table table-bordered">';
	stringa2+= "<tr><th>Id</th><th>Data_rif</th><th>Versione</th></tr>";
	
	for (i=0; i<data.length; i++){
		stringa2+="<tr>";
		stringa2+="<td>" + data[i].id + "</td>";
		stringa2+="<td>" + data[i].data + "</td>";
		stringa2+="<td>" + data[i].versione + "</td></tr>";
	}
	stringa2+= "</table>"
		return stringa2;
}

