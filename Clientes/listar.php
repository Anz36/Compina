<?php
    include ("../conexion/conexion.php");
    $query = "SELECT * FROM customers";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'name' => $row['name'],
            'business' => $row['business']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>