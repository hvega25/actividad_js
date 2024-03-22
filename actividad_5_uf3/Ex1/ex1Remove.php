<?php
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "actividad_js";
  
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_GET["id"];
    if(!empty($id)){
        $sql = ("DELETE FROM `productes` WHERE id= $id");

    if ($conn->query($sql) === TRUE) {
        echo "Se ha eliminado";
    } else {
        echo "Error : " . $conn->error;
    }
} else {
    echo "No encontrado";
}
$conn->close();
header('Location: ex1Llistat.php');
 

?>