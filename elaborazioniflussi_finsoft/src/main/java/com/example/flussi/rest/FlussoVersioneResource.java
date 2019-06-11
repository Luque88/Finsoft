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
import com.example.flussi.business.FlussoVersioneStore;
import com.example.flussi.entity.FlussoVersione;

@Path("/flussiversione")
public class FlussoVersioneResource {

	@Inject
	FlussoVersioneStore flussoVersioneStore;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<FlussoVersione> getFlussiVersione() {
		List<FlussoVersione> listOfFlussiVersione = flussoVersioneStore.findAll();
		return listOfFlussiVersione;
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public FlussoVersione getFlussoById(@PathParam("id") int id) {
		return flussoVersioneStore.find(id);

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public FlussoVersione addFlussoVersione(FlussoVersione v) {
		return flussoVersioneStore.addFlussoVersione(v);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public FlussoVersione updateFlussoVersione(FlussoVersione v) {
		return flussoVersioneStore.updateFlussoVersione(v);
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void remove(@PathParam("id") int id) {
		flussoVersioneStore.remove(id);
	}
}
