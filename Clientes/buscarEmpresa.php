<?php
    include ("../conexion/conexion.php");
    $buscado = $_POST['buscado'];
    if(!empty($buscado)){
        $query = "SELECT * from business where name like '$buscado%' or rubro like '$buscado%' or ruc like '$buscado%'";
        $result = mysqli_query($conexion,$query);
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['id'],
                'name' => $row['name'],
                'ruc' => $row['ruc'],
                'rubro' => $row['rubro']
            );
        }
        $jsonString = json_encode($json);
        echo $jsonString;
    }
?>