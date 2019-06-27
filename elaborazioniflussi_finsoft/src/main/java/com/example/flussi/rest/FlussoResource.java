package com.example.flussi.rest;

import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.example.flussi.business.FlussoStore;
import com.example.flussi.entity.Flusso;

@Path("/flussi")
public class FlussoResource {

	@Inject
	FlussoStore flussoStore;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Flusso> getFlussi()

	{

		List<Flusso> listOfFlussi = flussoStore.findAll();
		return listOfFlussi;
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Flusso getFlussoById(@PathParam("id") Integer id) {
		return flussoStore.find(id);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void addFlusso(Flusso f) {
		flussoStore.addFlusso(f);
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public Flusso updateFlusso(Flusso f) {
		return flussoStore.updateFlusso(f);
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void remove(@PathParam("id") Integer id) {
		flussoStore.remove(id);
	}

	// aggiungere record ad una tabella
	@POST
	@Path("/record")
	@Produces(MediaType.APPLICATION_JSON)
	public Flusso addRecord() {
		return flussoStore.addRecord();

	}


}
