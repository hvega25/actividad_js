<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php

$con = mysqli_connect("localhost","root","","ejemplo");
$cat = 1;
if($con){
    $query = "SELECT * FROM categoria";
    $result = mysqli_query($con, $query);

    $rows = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row; 
    }

    echo json_encode($rows);

    
}else{
    echo "No ha conectado";
}
?>
</body>
</html>