<?php
    include ("../conexion/conexion.php");
    $id = $_POST["id"];
    $query = "SELECT * FROM customers where id = '$id'";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'nombres' => $row['name'],
            'posicion' => $row['position'],
            'direccion' => $row['address'],
            'distrito' => $row['district'],
            'ciudad' => $row['city'],
            'provincia' => $row['province'],
            'email' => $row['email'],
            'telefono' => $row['phone'],
            'celular' => $row['movil']
            
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString; 

?>