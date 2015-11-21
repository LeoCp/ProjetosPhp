<?php

class Livro{
 
public function insetLivro($nomeLivro,$autorLivro,$paginasLivro,$estadoLivro){
  
  $insertLivro = $pdo->prepare("insert into livro (nomeLivro,autorLivro,paginasLivro,estadoLivro) values
  (:nomeLivro,:autorLivro,:paginasLivro,:estadoLivro)");
   
   $insertLivro->bindValue(":nomeLivro",$nomeLivro);
   $insertLivro->bindValue(":autorLivro",$autorLivro);
   $insertLivro->bindValue(":paginasLivro",$paginasLivro);
   $insertLivro->bindValue(":estadoLivro",$estadoLivro);
    
 }
}

?>
