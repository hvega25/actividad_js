<?php
header('Content-Type: application/json');
if(isset($_POST["id"]) && !empty($_POST["id"])){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "actividad_js";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM productes WHERE id=" . $_POST["id"];

    $result = $conn->query($sql);

    $array = array();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $object = new stdClass();
        $object->nom = $row["nom"];
        $object->addEdit = $row["id"];
       
        echo json_encode($object);

    } else {
        echo "0 results";
    }



    
if(isset($_POST["id"]) && !empty($_POST["id"]) && isset($_POST["action"]) && $_POST["action"] === "delete"){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "actividad_js";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $id = $_POST["id"];


    $sql = "DELETE FROM productes WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
    }

    $conn->close();
}
}


?>