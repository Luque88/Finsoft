<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<c:import url= "./includes/imports.jsp"/>
<title>InserisciElaborazione</title>
</head>
<body>
<main>
<header>
<nav>
<c:import url= "./includes/menu.jsp"/>
</nav>
</header>

<article>
	<div id="contenitore"></div>
	<br>
	<form class= "pre-form">
		<fieldset>
			<legend>Inserisci Elaborazione</legend>
			<label for="id">Id:</label>
			<input type= "text" id="id">
			
			<label for ="data_ora">Data:</label>
			<input type = "text" id="data_ora">
			
			<label for="utente">Utente:</label>
			<input type = "text" id="utente">
			
			<input type="button" class="pure-button pure-button-primary"
					id="b_modElaborazione" value="Conferma modifica"> <br>
		</fieldset>
	</form>
</article>
 <script src="./indexElaborazione.js" type="module"></script> 
</body>
</html>