var jsonVersioni;

document.querySelector("body").onload = caricaVersioni;

function caricaVersioni(){
	fetch('http://localhost:8080/elaborazioniflussi_finsoft/resources/versioni')
	.then(response => {
		console.log("response---", response);
		return response.json();
	})
	.then(json =>{
		document.querySelector("contenitore").innerHTML= "";
		creaTabellaDaJson (json, "id, data_rif, versione, codiceflusso", "tab1", "tabella","#contenitore");
		jsonVersioni = json;
	})
	.then (e => caricaSelect())
	.catch (x =>{
		alert("err" + x);
		console.log(err,x);
	});
}

caricaVersione ();