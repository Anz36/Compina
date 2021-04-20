<?php
    include ("../conexion/conexion.php");
    $fecha = $_POST["fecha"];
    $id = $_POST["id"];
    $query = "UPDATE details_attention SET date_notice='$fecha', status = '0' WHERE id = '$id'";
    $result = mysqli_query($conexion,$query);   
    
    if($result)
        echo "Editado correctamente";
    else
        echo "Error al Editar";
    
      

?>