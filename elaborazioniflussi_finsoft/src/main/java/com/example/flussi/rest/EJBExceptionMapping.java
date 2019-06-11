package com.example.flussi.rest;
import javax.ejb.EJBException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class EJBExceptionMapping implements ExceptionMapper <EJBException> {
	
@Override
public Response toResponse (EJBException ex) {
	return Response.status(Response.Status.BAD_REQUEST)
			.header("caused by","errore nell'accesso ai dati")
			.build();
}
}
