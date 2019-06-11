package com.example.flussi.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@NamedQueries({ @NamedQuery(name = "Flusso.findAll", query = "SELECT f FROM Flusso f"),
		@NamedQuery(name = "Flusso.findBytabella", query = "SELECT f FROM Flusso f WHERE f.tabella LIKE :tabella"), })

@Table(name = "t_flussi")
public class Flusso implements Serializable {

	private static final long serialVersionUID = -5858649828280710718L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_codiceflusso")
	private int id;

	@Column(name = "tabella")
	private String tabella;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTabella() {
		return tabella;
	}

	public void setTabella(String tabella) {
		this.tabella = tabella;
	}

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Flusso other = (Flusso) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Flusso [id=" + id + ", tabella=" + tabella + "]";
	}

}
