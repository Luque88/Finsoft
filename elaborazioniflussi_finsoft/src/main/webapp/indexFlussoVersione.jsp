<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<c:import url= "./includes/imports.jsp"/>
<title>FlussoVersione</title>
</head>
<body>
	<main>
	<header>
		<nav>
			<c:import url="./includes/menu.jsp"/>
		
		</nav>	
	</header>
		<article>
			<div id="contenitore"></div>
			<br>
			
			<form class="pure-form">
				<fieldset>
					<legend>Inserisci Flusso Versione</legend>
					<label for="id">Id:</label>
					<input type="text" id="id">
					
					<label for="data_rif">Data_rif:</label>
					<input type= "text" id="dataa_rif">
					
					<label for= "versione">Versione:</label>
					<input type ="text" id="versione">
					
					<input type="button" class="pure-button pure-button-primary"
					id="b_modFlussoVersione" value="Conferma modifica"> <br>
				</fieldset>
			</form>
		</article>
		<script src= "./indexFlusso.js" type="module"></script>
</body>
</html>