package com.example.flussi.entity;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class LocalDateDeserializer extends JsonDeserializer<LocalDate> {

	@Override
	public LocalDate deserialize(JsonParser p, DeserializationContext ctxt)
			throws IOException, JsonProcessingException {

		DateTimeFormatter DTF = DateTimeFormatter.ofPattern("dd/MM/yyyy");

		LocalDate localdate = null;

		localdate = LocalDate.parse(p.getText(), DTF);
		return localdate;

	}

}
