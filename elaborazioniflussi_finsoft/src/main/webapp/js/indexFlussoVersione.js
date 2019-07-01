import FlussoVersioneService from  './FlussoVersioneService.js';
import Tabella from  './DisegnaTabella.js';

class App {
	constructor (){
		
		this.onCreate = this.onCreate.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onSave = this.onSave.bind(this);
		
		this.operationReq = "";
		this.id = document.querySelector("#id");
		this.data = document.querySelector("#data");
		this.versione = document.querySelector("#versione");
		this.bSave = document.querySelector("#b_insFlussoVersione");
		this.bSave.onclick = this.onSave;
		this.flussoversione = new VersioneService();
		this.tb = new Tabella({
			titolo: "Elenco FLUSSI VERSIONE",
			service: this.service,
			idTabella: "tb1FlussiVersione",
			classeTabella: "pure-table table-select",
			contenitore: "#contenitore",
			page: 1,
			callbackCreate: this.onCreate,
			callbackUpdate: this.onUpdate,
			callbackDelete: this.onDelete
		
		});
	}
	
	onCreate(){
		this.operationReq = "CREATE";
		this.id.value = "";
		this.data.value = "";
		this.versione.value = "";
	}
	
	onUpdate (url){
		this.operationReq = "UPDATE";
		this.url = url; 
		this.service.find(url).then(json =>{
			this.id.value = json.id;
			this.data.value = json.data;
			this.versione.value = json.versione;
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
				data: this.data.value,
				versione: this.versione.value
			});
		}else {
			this.service.update(this.url, {
				id: this.id.value,
				data: this.data.value,
				versione: this.versione.value
			});
		}
		this.tb.reloadData();
	}
	
}

new App();