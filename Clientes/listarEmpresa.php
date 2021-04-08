<?php
    include ("../conexion/conexion.php");
    $query = "SELECT * FROM business";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'name' => $row['name'],
            'ruc' => $row['ruc'],
            'rubro' => $row['rubro']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>