<?php


mysql_connect('localhost','root','');
mysql_select_db('bd_lermais');

$selectLivro = mysql_query('select * from livro where estadoLivro = 1');

$a = 0;

  while ($a = mysql_fetch_array($selectLivro)) {

  echo '<option>';
  echo $a['nomeLivro'];
  echo '</option>';

}

