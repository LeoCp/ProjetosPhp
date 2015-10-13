<?php 

mysql_connect('localhost','root','');
mysql_select_db('bd_lermais');

$nomeDoLivro = $_POST["nomelivro"];
$nomeDoAutor = $_POST["nomeautor"];
$numeroPaginas = $_POST["numeropaginas"];
$estadoLivro = $_POST["estadolivro"];

$query = mysql_query("insert into livro(nomeLivro,autorLivro,paginasLivro,estadoLivro) values ('$nomeDoLivro', '$nomeDoAutor',$numeroPaginas,$estadoLivro)");

 ?>