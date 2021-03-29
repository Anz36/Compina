<?php
    include ("../conexion/conexion.php");
    $query = "select idcliente,nombres,apellidos,empresa from clientes";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['idcliente'],
            'nombre' => $row['nombres'].' '.$row['apellidos'],
            'empresa' => $row['empresa']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>