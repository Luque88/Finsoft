<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
					<legend>Flussi Versione</legend>
					<label for="id">Id:</label>
					<input type="text" id="id">
					
					<label for="data_rif">Data_rif:</label>
					<input type= "date" id="data_rif">
					
					<label for= "versione">Versione:</label>
					<input type ="text" id="versione">
					
					<input type="button" class="pure-button pure-button-primary"
					id="b_modFlussoVersione" value="Inserisci"> <br>
				</fieldset>
			</form>
			<div id="miaTabella2"></div>
		</article>
			<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
		
<script src= "js/indexFlussoVersione.js" type="module"></script> 
<script src="js/DisegnaTabella.js" type="text/javascript"></script>
</body>
</html>