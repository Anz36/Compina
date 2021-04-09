<?php
    function getNombre($id)
    {
        include ("../conexion/conexion.php");
        $nombre = "";
        $query = "SELECT * FROM business WHERE id = '$id'";
        $result = mysqli_query($conexion,$query);
        while($row = mysqli_fetch_array($result)){            
            $nombre = $row['name'];
        }
        return $nombre;
    }

    include ("../conexion/conexion.php");
    $query = "SELECT * FROM customers";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'name' => $row['name'],
            'business' => getNombre($row['business']),
            'phone' => $row['phone']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>