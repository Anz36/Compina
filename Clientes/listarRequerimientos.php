<?php

    include ("../conexion/conexion.php");
    $query = "SELECT *  FROM requirements ORDER BY requirements_date DESC";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'empresa' => $row['business'],
            'nombre' => $row['name'],
            'email' => $row['email'],
            'telefono' => $row['phone'],
            'mensaje' => $row['message'],
            'origen' => $row['site_web'],
            'fecha' => $row['requirements_date']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>