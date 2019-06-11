<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<c:import url="./includes/imports.jsp" />
<title>InserisciFlusso</title>
</head>
<body>
	<main>
	 <header>
		<nav>
			<c:import url="./includes/menu.jsp" />

		</nav>

	</header>
	<article>
		<div id="contenitore"></div>
		<br> <br>
		<form class="pure-form">
			<fieldset>
				<legend>Inserisci/Modifica Flussi</legend>
				<label for="id">Id:</label> 
				<input type="text" id="id"> 
				<label for="tabella">Tabella:</label> 
				<input type="text" id="tabella">
				<input type="button" class="pure-button pure-button-primary"
					id="b_modFlusso" value="Conferma modifica"> <br>
			</fieldset>
		</form>
	</article>
	<script src="./indexFlusso.js" type="module"></script>
</body>
</html>