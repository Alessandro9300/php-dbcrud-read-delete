<?php


  $server = "localhost";
  $username = "root";
  $password = "root";
  $dbName = "ex_2_db";

  $conn = new mysqli($server, $username, $password, $dbName);

  if ($conn -> connect_errno){
    echo $conn -> connect_errno;
    return;
  }

  $id = $_GET["id"];

  $sql = "DELETE FROM paganti where id = " . $id;



  $conn -> query($sql);
  $conn -> close();



?>
