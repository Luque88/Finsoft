package com.example.flussi.business;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.example.flussi.entity.FlussoVersione;

@Stateless
public class FlussoVersioneStore {

	@PersistenceContext(name = "finsoft_flussi")
	EntityManager em;

	public FlussoVersione find(Integer id) {
		return em.find(FlussoVersione.class, id);
	}

	public FlussoVersione save(FlussoVersione v) {
		return em.merge(v);
	}

	public void remove(Integer id) {
		em.remove(find(id));
	}

	public FlussoVersione addFlussoVersione(FlussoVersione v) {
		return em.merge(v);
	}

	public FlussoVersione updateFlussoVersione(FlussoVersione v) {
		return em.merge(v);
	}

	public List<FlussoVersione> findAll() {
		TypedQuery<FlussoVersione> query = em.createNamedQuery("flusso_versione.findAll", FlussoVersione.class);
		List<FlussoVersione> result = query.getResultList();
		return result;
	}


	public List<FlussoVersione> flussiversioni(Integer idFlusso) {
		return em.createQuery("SELECT f FROM FlussoVersione f WHERE f.flusso.id= :idFlusso", FlussoVersione.class)
				.setParameter("idFlusso", idFlusso).getResultList();
	}
}
