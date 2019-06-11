package com.example.flussi.business;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.example.flussi.entity.Elaborazione;

@Stateless
public class ElaborazioneStore {

	@PersistenceContext(name = "finsoft_flussi")
	EntityManager em;

	public Elaborazione find(Integer id) {
		return em.find(Elaborazione.class, id);
	}

	public Elaborazione save(Elaborazione e) {
		return em.merge(e);
	}

	public void remove(Integer id) {
		em.remove(find(id));
	}

	public Elaborazione addElaborazione(Elaborazione e) {
		return em.merge(e);
	}

	public Elaborazione updateElaborazione(Elaborazione e) {
		return em.merge(e);
	}

	public List<Elaborazione> findAll() {

		TypedQuery<Elaborazione> query = em.createNamedQuery("elaborazione.findAll", Elaborazione.class);
		List<Elaborazione> result = query.getResultList();
		return result;
	}

	public Elaborazione findId(Integer id) {
		return em.find(Elaborazione.class, id);
	}

}