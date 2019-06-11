var jsonElaborazioni;

document.querySelector("body").onload = caricaElaborazioni;

function caricaElaborazioni(){
	fetch('http://localhost:8080/elaborazioniflussi_finsoft/resources/elaborazioni')
	.then(response =>{
		console.log("response---", response);
		return response.json();
	})
	.then(json => {
		document.querySelector("contenitore").innerHTML = "";
		creaTabellaDaJson (json, "id,tabella, codiceflusso", "tab1", "tabella", "#contenitore");
		jsonElaborazioni = json;
	})
	.then (e => caricaSelect())
	.catch (x =>{
		alert ("err" + x);
		console.log (err, x);
	});
}

caricaElaborazione ();

function caricaSelect (){
	document.querySelector("#sel_el").innerHTML="";
	
	let opt = document.createElement("option");
	opt.innerHTML = "scegli l'elaborazione da modificare";
	opt.value= -1;
	document.querySelector("#sel_el").append(opt);
	
	jsonElaborazioni.forEach((elaborazione, j) =>{
		let opt = document.createElement ("option");
		opt.innerHTML = elaborazione.id + " --> " + elaborazione.elaborazione + " - " + elaborazione.utente + elaborazione.data_ora;
		opt value = j;
		opt.settAttribute("elaborazione", elaborazione elaborazione);
		opt.settAttribute("data_ora", elaborazione.data_ora);
		opt.settAttribute("utente", elaborazione.utente);
		document.querySelector("#sel_el").append(opt);
		
	})
}


document.querySelector ("#sel_el").onchange = function (e){
	
	let indiceOpzione = document.querySelector ("#sel_el").selectedIndex
	let opzioneSelezionata = document.querySelector ("#sel_el").options[indiceOpzione]
	
	let value = opzioneSelezionata.value;
	let idElaborazione = json.Elaborazioni[value].id;
	let utente = json.Utente[value].utente;
	let data_ora = json.Data_ora[value].data_ora;
	
	 document.querySelector("#elaborazione").value = elaborazione;
	    document.querySelector("#data_ora").value = data_ora;
	    document.querySelector("#utente").value = utente;
	    console.log(idElaborazione, data_ora, utente);
	}

	
	document.querySelector("#b_modEl.onclick" = function () {
	    console.log("click su modifica el"

	    let indiceOpzione = document.querySelector("#sel_el.selectedIndex)
	    let opzioneSelezionata = document.querySelector("#sel_el).options[indiceOpzione]

	    let value = opzioneSelezionata.value

	    let idElaborazione[value]id

	    let obj = {}

	    obj.data_ora = document.querySelector("#data_ora").value
	    obj.utente = document.querySelector("#utente").value

	    console.log("invio", obj)

	    fetch('http://localhost:8080/elaborazioniflussi_finsoft/resources/elaborazioni' + idElaborazione, {
	        method: 'put',

	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },

	        body: JSON.stringify(obj)

	    }).then(function (response) {
	        console.log("response:", response)
	        console.log("response.text():", response.text())
	        
	        caricaElaborazione()
	        caricaSelect()
	        return;
	    }).catch(res => console.error("ERRORE:", res))


	}








