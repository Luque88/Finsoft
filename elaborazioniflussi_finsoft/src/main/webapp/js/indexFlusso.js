//caricaFlusso();
//
//function caricaFlusso() {
//    
//   document.querySelector("#b_insFlussi").innerHTML = "";
//    
//    let opt = document.createElement("option");
//    opt.innerHTML = "Scegli il record da inserire";
//    opt.value = -1;
//    document.querySelector("#b_insFlussi").append(opt);
//
//    jsonFlussi.forEach((flusso, j) => {
//        let opt = document.createElement("option");
//        opt.innerHTML = flusso.id + " --> " + flusso.flusso + " - ";
//        opt.value = j;
//        opt.setAttribute("flusso", flusso.flusso);
//        opt.setAttribute("idFlusso", flusso.id); 
//        document.querySelector("#b_insFlussi").append(opt);
//
//    })
//
//
//}
//
//
//
//document.querySelector("#b_insFlussi").onchange = function () {
//
//    let indiceOpzione = document.querySelector("#b_insFlussi").selectedIndex
//    let opzioneSelezionata = document.querySelector("#b_insFlussi").options[indiceOpzione]
//
//    let value = opzioneSelezionata.value;
//    let idFlusso = jsonFlussi[value].id;
//    let tabella = jsonFlussi[value].tabella;
//    
//    document.querySelector("#flusso").value = flusso;
//    document.querySelector("#tabella").value = tabella;
//    console.log(idFlusso, tabella, flusso);
//}
//
//
//
//document.querySelector("#b_elimFlusso").onclick = function (e) {
//    console.log("click su modifica flusso")
//
//    let indiceOpzione = document.querySelector("#b_insFlussi").selectedIndex
//    let opzioneSelezionata = document.querySelector("#b_insFlussi").options[indiceOpzione]
//
//    let value = opzioneSelezionata.value
//
//    let idFlusso = jsonFlussi[value].id
//
//    let obj = {}
//
//    obj.id = document.querySelector("#id").value
//    obj.tabella = document.querySelector("#tabella").value
//
//    console.log("invio", obj)
//
//    fetch('http://localhost:8080/elaborazioniflussi_finsoft/resources/flussi/' + idFlusso, {
//        method: 'put',
//
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//
//        body: JSON.stringify(obj)
//
//    }).then(function (response) {
//        console.log("response:", response)
//        console.log("response.text():", response.text())
//        
//        caricaFlusso()
//      
//        return;
//    }).catch(res => console.error("ERRORE:", res))
//
//
//}
