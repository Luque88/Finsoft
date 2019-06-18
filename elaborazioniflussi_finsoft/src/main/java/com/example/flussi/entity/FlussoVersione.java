package com.example.flussi.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@NamedQueries({
		@NamedQuery(name = "flusso_versione.findAll", query = "SELECT v FROM FlussoVersione v ORDER BY v.data DESC"),

})
@Table(name = "t_flussi_versioni")
public class FlussoVersione implements Serializable {

	
	private static final long serialVersionUID = -8509754361688779620L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_flusso_versione")
	private int id;

	@Column(name = "data_rif")
	//@JsonFormat(pattern="dd/MM/yyyy")
	@JsonFormat(pattern="yyyy/MM/dd")
	private Date data;

	@Column(name = "versione")
	private String versione;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_codiceflusso", referencedColumnName = "id_codiceflusso")
	private Flusso flusso;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getVersione() {
		return versione;
	}

	public void setVersione(String versione) {
		this.versione = versione;
	}

	public Flusso getFlusso() {
		return flusso;
	}

	public void setFlusso(Flusso flusso) {
		this.flusso = flusso;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((data == null) ? 0 : data.hashCode());
		result = prime * result + id;
		result = prime * result + ((versione == null) ? 0 : versione.hashCode());
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
		FlussoVersione other = (FlussoVersione) obj;
		if (data == null) {
			if (other.data != null)
				return false;
		} else if (!data.equals(other.data))
			return false;
		if (id != other.id)
			return false;
		if (versione == null) {
			if (other.versione != null)
				return false;
		} else if (!versione.equals(other.versione))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "FlussoVersione [id=" + id + ", data=" + data + ", versione=" + versione + "]";
	}

}