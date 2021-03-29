<?php
    include ("../conexion/conexion.php");
    $buscado = "ju";
    if(!empty($buscado)){
        $query = "SELECT * from clientes where nombres like '$buscado%'";
        $result = mysqli_query($conexion,$query);
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['idcliente'],
                'nombre' => $row['nombres'].' '.$row['apellidos'],
                'empresa' => $row['empresa']
            );
        }
        $jsonString = json_encode($json);
        echo $jsonString;
    }
?>