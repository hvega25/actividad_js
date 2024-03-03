<?php
//No me deja hacer una consulta de un js por eso esta este comando
header("Access-Control-Allow-Origin: *");

//conexión a la base de datos
//NOTA PARA HERSON DEL FUTURO: ACORDATE DE CAMBIAR EL EJEMPLO A ACTIVIDAD_JS Y CREAR LA BASE DE DATOS
$con = mysqli_connect("localhost","root","","actividad_js");

//variable estatica para las pruebas
$cat = $_POST['cat1'];
if($con){

    //query a la base de datos
    $query = "SELECT * FROM subcategoria WHERE id_categoria = $cat";
    $query_1 = "SELECT * FROM subcategoria";


    //consulta a la base de datos
    $consulta = mysqli_query($con, $query);


    //guarda un arreglo
    $return = array();

    $object = new stdClass();
   // ciclo para retorno de subcategorias
    while ($row = mysqli_fetch_assoc($consulta)) {
        $object = new stdClass();
        $object->id = $row["id_subcat"];
        $object->id_cat = $row["id_categoria"];
        $object->nom = $row["nom_subcat"];
        $return[] = $object;
       
        //$return[] = $row; 
    }


    echo json_encode($return);

    
}else{
    echo "No ha conectado";
}
?>
