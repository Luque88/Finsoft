//import FlussoService from './FlussoService.js';
//import Tabella from "./DisegnaTabella.js";
//
//class App {
//    constructor() {
//
//
//        this.onCreate = this.onCreate.bind(this);
//        this.onUpdate = this.onUpdate.bind(this);
//        this.onDelete = this.onDelete.bind(this);
//        this.onSave = this.onSave.bind(this);
//
//        this.operationReq = '';
//        this.id = document.querySelector("#id");
//        this.tabella = document.querySelector("#tabella");
//        this.bSave = document.querySelector("#b_insFlusso");
//        this.bSave.onclick = this.onSave;
//        this.service = new FlussoService();
//        this.tb = new Tabella({
//            titolo: "Elenco FLUSSI",
//            service: this.service,
//            idTabella: "tblFlussi",
//            classeTabella: "pure-table table-select",
//            contenitore: "#contenitore",
//            page: 6,
//            callbackCreate: this.onCreate,
//            callbackUpdate: this.onUpdate,
//            callbackDelete: this.onDelete
//        });
//
//    }
//
//    onCreate() {
//        this.operationReq = "CREATE";
//        this.id.value = "";
//        this.tabella.value = "";
//    }
//
//    onUpdate(url) {
//        this.operationReq = "UPDATE";
//        this.url = url;
//        this.service.find(url).then(json => {
//            this.id.value = json.id;
//            this.tabella.value = json.tabella;
//        });
//    }
//
//    onDelete(url) {
//        this.operationReq = "DELETE";
//        this.service.delete(url);
//        this.tb.reloadData();
//    }
//
//    onSave() {
//        if (this.operationReq === "CREATE") {
//            this.service.create({
//                id: this.id.value,
//                tabella: this.tabella.value
//            });
//        } else {
//            this.service.update(this.url, {
//                id: this.id.value,
//                tabella: this.tabella.value
//            });
//        }
//        this.tb.reloadData();
//    }
//}
//
//new App();




