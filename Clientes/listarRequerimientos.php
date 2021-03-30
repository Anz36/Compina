<?php
    include ("../conexion/conexion.php");
    $query = "select idconsulta,nombres,empresa,email,telefono,fecha_consulta,asunto from consultas";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['idconsulta'],
            'nombre' => $row['nombres'],
            'empresa' => $row['empresa'],
            'email' => $row['email'],
            'telefono' => $row['telefono'],
            'fecha' => $row['fecha_consulta'],
            'asunto' => $row['asunto']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>