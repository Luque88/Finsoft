var jsonFlussi;

document.querySelector("body").onload = caricaFlussi;

function caricaFlussi (){
	fetch ('htto://localhost:8080/elaborazioniflussi_finsoft/resources/ flussi')
	.then(response =>{
		console.log("response---", response);
		return response.json();
	})
	.then(json => {
		document.querySelector("contenitore").innerHTML = "";
		creaTabellaDaJson (json, "id, tabella, codiceflusso", "tab1", "tabella", "#contenitore" );
		jsonFlussi = json;
	})
	.then (e => caricaSelect())
	.cath (x =>{
		alert ("err" + x);
		console.log(err,x);
	});
}

caricaFlusso ();

function caricaSelect (){
	document.querySelector ("#sel_flusso").innerHTML= "";
	
	let opt = document.createElement("option");
	opt.innerHTML = " scegli il flusso da modificare";
	opt.value= -1;
	document.querySelector("#sel_flusso").append(opt);
	
	jsonFlussi.forEach((flussi, j)=>{
		let opt = document.crateElement ("option");
		opt.innerHTML = flusso.id + " -->" + flusso.flusso + " - " + flusso.tabella + flusso.codiceflusso;
		opt value =  j;
		opt.settAttribute ("flusso", flusso flusso);
		opt.settAttribute ("tabella", flusso.tabella);
		opt.settAttribute ("codiceflusso", flusso.codiceflusso);
		document.querySelector("#sel_flusso").append(opt);
			
	})
}

document.querySelector ("#sel_flusso").onchange = function (e){
	
	let indiceOpzione = document.querySelector ("#sel_flusso").selectedIndex
	let opzioneSelezionata = document.querySelector ("#sel_flusso").options [indiceOpzione]
	
	let value = opzioneSelezionata.value;
	let idFlusso = json.Flussi[value].id;
	let tabella = json.Tabella [value].tabella;
	let codiceflusso = json.Codiceflusso[value].codiceflusso;
	
	document.querySelector("#flusso").value = flusso;
	document.querySelector("#tabella").value = tabella;
	document.querySelector("#codiceflusso").value = codiceflusso;
	console.log(idFlusso, tabella, codiceflusso);
	
}

document.querySelector ("#b_modFlu.onclick" = function() {
	console.log ("click su  modifica flusso")
	
	let indiceOpzione = document.querySelector ("#sel_flusso.selectedIndex")
	let opzioneSelezionata = document.querySelector ("#sel_flusso").option[indicepzioe]
	
	let value = opzioneSelezionata.value;
	
	let idFlusso [value]id
	
	let obj = {}
	
	obj.tabella = document.querySelector("#tabella").value
	obj codiceflusso = document.querySelector("#codiceflusso").value
	
	console.log ("invio", obj)
	
	fetch ('http://localhost:8080/elaborazioniflussi_finsoft/resources/flussi' + ifFlusso, {
		method: `put`,
		
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		
		body: JSON.stringify(obj)
		
	}).then (function (response){
		console.log("response", response)
		console.log("response.text():", response.txt())
		
		caricaFlusso ()
		caricaSelect()
		return;
	}).catch ( res => console.error ("errore", res))
	
}
