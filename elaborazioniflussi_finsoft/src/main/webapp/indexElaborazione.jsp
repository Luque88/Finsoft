<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
			<legend>Elaborazioni</legend>
			<label for="id">Id:</label>
			<input type= "text" id="id">
			
			<label for ="data_ora">Data:</label>
			<input type = "date" id="data_ora">
			
			<label for="utente">Utente:</label>
			<input type = "text" id="utente">
			
			<input type="button" class="pure-button pure-button-primary"
					id="b_insElaborazione" value="Inserisci"> 
							
			<input type="button" class="pure-button pure-button-primary"
					id="b_elimElaborazione" value="Elimina">					
		</fieldset>
	</form>
	<div id="miaTabella1"></div>
</article>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>


 <script src="js/indexElaborazione.js" type="module"></script> 
 <script src="js/DisegnaTabella.js" type="text/javascript"></script>
</body>
</html>