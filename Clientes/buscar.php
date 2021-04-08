<?php
    include ("../conexion/conexion.php");
    $buscado = $_POST['buscado'];
    if(!empty($buscado)){
        $query = "SELECT * from customers where name like '$buscado%' or email like '$buscado%' or phone like '$buscado%'";
        $result = mysqli_query($conexion,$query);
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'business' => $row['business'],
            'phone' => $row['phone']
            );
        }
        $jsonString = json_encode($json);
        echo $jsonString;
    }
?>