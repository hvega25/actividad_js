<?php

//No me deja hacer una consulta de un js por eso esta este comando
header("Access-Control-Allow-Origin: *");

//conexión a la base de datos

//NOTA PARA HERSON DEL FUTURO: ACORDATE DE CAMBIAR EL EJEMPLO A ACTIVIDAD_JS Y CREAR LA BASE DE DATOS
//$con = mysqli_connect("localhost","root","","actividad_js");
$con = mysqli_connect("localhost","root","","ejemplo");


if($con){

    //query a la base de datos
    $query = "SELECT * FROM categoria";



    //consulta a la base de datos
    $consulta = mysqli_query($con, $query);


    //guarda un arreglo
    $return = array();

    $object = new stdClass();


//ciclo para retorno de categorias
    while ($row = mysqli_fetch_assoc($consulta)) {
        $object = new stdClass();
        $object->id = $row["id_categoria"];
        $object->nom = $row["nombre"];
        $return[] = $object;
       
        //$return[] = $row; 
    }
    
  
    echo json_encode($return);

    
}else{
    echo "No ha conectado";
}
?>
