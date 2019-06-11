package com.example.flussi.business;

import java.util.List;
import java.util.Random;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.example.flussi.entity.Flusso;

@Stateless
public class FlussoStore {

	@PersistenceContext(name = "finsoft_flussi")
	EntityManager em;

	public Flusso find(Integer id) {
		return em.find(Flusso.class, id);
	}

	public Flusso save(Flusso f) {
		return em.merge(f);
	}

	public void remove(Integer id) {
		em.remove(find(id));
	}

	public Flusso addFlusso(Flusso f) {
		return em.merge(f);
	}

	public Flusso updateFlusso(Flusso f) {
		return em.merge(f);
	}

	public List<Flusso> findByCodiceFlusso(Integer codiceflussoId) {
		return em.createQuery("SELECT f FROM Flusso f WHERE f.codiceflusso.id= :codiceflusso_id ORDER BY f.id",
				Flusso.class).setParameter("codiceflusso_id", codiceflussoId).getResultList();
	}

	public List<Flusso> findAll() {
		return em.createQuery("SELECT f FROM Flusso f ORDER BY f.id", Flusso.class).getResultList();
	}

	public List<Flusso> flussi(Integer id) {
		return em.createQuery("SELECT f.flussi FROM Flusso f WHERE f.id", Flusso.class).setParameter("id", id)
				.getResultList();

	}

//popolare una tabella
	public Flusso addRecord() {

		String vocali[] = { "A", "E", "I", "O", "U" };

		String tabella = "";

		for (Integer j = 0; j < vocali.length; j++) {
			Random random = new Random();
			int k = random.nextInt(5);
			tabella = tabella.concat(vocali[k % vocali.length]);

		}

		Flusso flusso = new Flusso();
		flusso.setTabella(tabella);
		flusso = this.addFlusso(flusso);
		return flusso;

	}

//	public Flusso addRecords() {
//		
//			String[] a = { "a", "e", "i", "o", "u" };
//
//			for (int i = 0; i <5; i++) {	
//
//				String tabella = "";
//
//				for (int j = 0; j < a.length; j++) {
//					int casuale = (int) (Math.random()*5);
//					tabella = tabella + a[casuale];
//					
//					
//				}
//				Flusso flusso = new Flusso();
//				flusso.setTabella(tabella);
//				flusso= this.addFlusso(flusso);
//				return flusso;
//
//			}
//			return null;
//			
//		
//
//		}
	}

