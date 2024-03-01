<?php

//conexión a la base de datos
$con = mysqli_connect("localhost","root","","ejemplo");

//variable estatica para las pruebas
$cat = 1;
if($con){

    //query a la base de datos
    $query = "SELECT * FROM subcategoria WHERE id_categoria = $cat";
    $query_1 = "SELECT * FROM subcategoria";


    //consulta a la base de datos
    $consulta = mysqli_query($con, $query_2);


    //guarda un arreglo 
    $return = array();

    $object = new stdClass();


//ciclo para retorno de categorias
    while ($row = mysqli_fetch_assoc($consulta)) {
        $object = new stdClass();
        $object->id = $row["id_cat"];
        $object->nom = $row["nombre"];
        $return[] = $object;
       
        //$return[] = $row; 
    }
    
  
    echo json_encode($return);

    
}else{
    echo "No ha conectado";
}
?>
