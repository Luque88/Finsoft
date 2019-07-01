
$(document).ready(function (){
	$("search-form").submit(function (event){
		event.preventDefault();
		
		var flusso= {}
		flusso["id"] = $("#id").val();
		flusso["tabella"] = $("#tabella").val();
		
		$.ajax({
			type: "POST",
			contentType: "application/json",
			url:"resources/flussi/record",
			data:JSON.stringify(flusso),
			dataType: 'json',
			cache: false,
			timeout:100000,
			success: function (data){
				
				console.log("SUCCESS: ", data);
			},
			error: function(e){
				console.log("ERROR: ", e);
			}
		});
		
	});
});


function b_insFlusso (){
	var flusso = new Flusso();
	flusso.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      myFunction(this);
	    }
	  };
	  
	 
	}
	
