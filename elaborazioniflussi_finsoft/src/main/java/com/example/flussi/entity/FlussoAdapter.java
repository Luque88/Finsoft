package com.example.flussi.entity;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.bind.adapter.JsonbAdapter;

public class FlussoAdapter implements JsonbAdapter<Flusso, JsonObject> {

	Flusso flusso = null;
	
	public FlussoAdapter (Flusso flusso) {
		this.flusso = flusso;
	}

	@Override
	public JsonObject adaptToJson(Flusso flusso) throws Exception {
		return Json.createObjectBuilder()
				.add("id", flusso.getId())
				.add("tabella", flusso.getTabella())
				.build();
	}

	@Override
	public Flusso adaptFromJson(JsonObject obj) throws Exception {
	
		return new Flusso ();
				
	}
	

}
