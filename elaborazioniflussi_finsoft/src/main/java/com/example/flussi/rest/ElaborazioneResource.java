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
import com.example.flussi.business.ElaborazioneStore;
import com.example.flussi.entity.Elaborazione;

@Path("/elaborazioni")
public class ElaborazioneResource {

	@Inject
	ElaborazioneStore elaborazioneStore;
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List <Elaborazione>getElaborazioni (){
		List <Elaborazione> listOfElaborazioni = elaborazioneStore.findAll();
		return listOfElaborazioni;
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Elaborazione getElaborazioneById(@PathParam("id")int id) {
		return elaborazioneStore.find(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Elaborazione addElaborazione(Elaborazione e) {
		return elaborazioneStore.addElaborazione(e);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Elaborazione updateElaborazione(Elaborazione e) {
		return elaborazioneStore.updateElaborazione(e);
	}
	
	@DELETE
	@Path("{/id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void remove (@PathParam("id")int id) {
		elaborazioneStore.remove(id);
	}
}
