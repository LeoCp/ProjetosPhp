<?php


mysql_connect('localhost','root','');
mysql_select_db('bd_lermais');

$selectLivro = mysql_query('select * from livro where estadoLivro = 3');
$x = '<td >';
$y='</td>';
$z = '<tr>';
$w = '</tr>';
$a = 0;$x = 0;

function criaTh(){
    echo'<tr>';
    echo'<th>#</th>';
    echo'<th>Livro</th>';
    echo'<th>Autor</th>';
    echo'<th>Paginas</th>';
    echo'</tr>';
}

  criaTh();

  while ($a = mysql_fetch_array($selectLivro)) {

  echo '<tr>';
  echo '<td>';
  echo $x += 1;
  echo '</td>';
  echo '<td>';
  echo $a['nomeLivro'];
  echo '</td>';
  echo '<td >';
  echo $a['autorLivro'];
  echo '</td>';
  echo '<td>';
  echo $a['paginasLivro'];
  echo '</td>';

  echo '</tr>';

}


?>
