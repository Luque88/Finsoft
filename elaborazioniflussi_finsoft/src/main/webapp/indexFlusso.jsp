<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
				<legend>Flussi</legend>
			
				<label for="id">Id:</label> 
				<input type="text" id="id"> 
				
				<label for="tabella">Tabella:</label> 
				<input type="text" id="tabella">
				
				<input type="button" class="pure-button pure-button-primary"
					id="b_insFlusso" value="Inserisci">
					
				<input type="button" class="pure-button pure-button-primary"
					id="b_elimFlusso" value="Elimina">	
			</fieldset>
		</form>
		<div id="miaTabella"></div>
	
	</article>
	
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	
	
	<script src="js/DisegnaTabella.js" type="text/javascript"></script>
	<script src="js/indexFlusso.js" type="text/javascript"></script>
</body>
</html>