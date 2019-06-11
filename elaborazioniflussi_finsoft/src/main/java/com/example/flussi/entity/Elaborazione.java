package com.example.flussi.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@NamedQueries({
		@NamedQuery(name = "elaborazione.findAll", query = "SELECT e FROM Elaborazione e ORDER BY e.data DESC") })

@Table(name = "t_elaborazioni")
public class Elaborazione implements Serializable {

	private static final long serialVersionUID = 7129838229448364110L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_elaborazione")
	private int id;

	@Column(name = "data_ora")
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date data;

	@Column(name = "utente")
	private String utente;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "t_elaborazioni_input", 
		joinColumns = @JoinColumn(name = "id_elaborazione", referencedColumnName = "id_elaborazione"), 
		inverseJoinColumns = @JoinColumn(name = "id_flusso_versione", referencedColumnName = "id_flusso_versione"))
	private Set<FlussoVersione> flussiVersioneInput;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name="t_elaborazioni_output", 
        joinColumns = @JoinColumn(name="id_elaborazione", referencedColumnName = "id_elaborazione"),
        inverseJoinColumns = @JoinColumn(name= "id_flusso_versione", referencedColumnName = "id_flusso_versione"))
    private Set <FlussoVersione> flussiVersioneOutput;

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

	public String getUtente() {
		return utente;
	}

	public void setUtente(String utente) {
		this.utente = utente;
	}

	public Set<FlussoVersione> getFlussiVersioneInput() {
		return flussiVersioneInput;
	}

	public Set<FlussoVersione> getFlussiVersioneOutput() {
		return flussiVersioneOutput;
	}

	public void setFlussiVersioneOutput(Set<FlussoVersione> flussiVersioneOutput) {
		this.flussiVersioneOutput = flussiVersioneOutput;
	}

	public void setFlussiVersioneInput(Set<FlussoVersione> flussiVersioneInput) {
		this.flussiVersioneInput = flussiVersioneInput;
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
		Elaborazione other = (Elaborazione) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Elaborazione [id=" + id + ", data=" + data + ", utente=" + utente + "]";
	}

}
