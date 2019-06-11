import FlussoService from "./js/ElaborazioneService.js";
import Tabella from "./js/Tabella.js";

class App {
	constructor (){
		
		this.onCreate = this.onCreate.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onSave = this.onSave.bind(this);
		
		this.operationReq = "";
		this.id = document.querySelector("#id");
		this.tabella = document.querySelector("#tabella");
		this.bSave = document.querySelector("#b_modElaborazione");
		this.bSave.onclick = this.onSave;
		this.elaborazione = new ElaborazioneService();
		this.tb = new Tabella({
			titolo: "Elenco Elaborazioni",
			service: this.service,
			idTabella: "tabella",
			classeTabella: "pure-table table-select",
			contenitore: "#contenitore",
			page: 2,
			callbackCreate: this.onCreate,
			callbackUpdate: this.onUpdate,
			callbackDelete: this.onDelete
		
		});
	}
	
	onCreate(){
		this.operationReq = "CREATE";
		this.id.value = "";
		this.data.value = "";
		this.utente.value = "";
	}
	
	onUpdate (url){
		this.operationReq = "UPDATE";
		this.url = url;
		this.service.find(url.then(json =>{
			this.id.value = json.id;
			this.data.value = json.data;
			this.utente.value = json.utente;
		});
		
	}
	
	
	onDelete(url){
		this.operationReq = "DELETE";
		this.service.delete(url);
		this.tb.reloadData();
	}
	
	onSave(){
		if(this.operationReq === "CREATE"){
			this.service.create({
				id: this.id.value,
				data: this.data.value
			});
		}else {
			this.service.update(this.url, {
				id: this.id.value,
				data: this.data.value
				utente: this.utente.value
			});
		}
		this.tb.reloadData();
	}
	
}
new App ();