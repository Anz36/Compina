<?php
    include ("../conexion/conexion.php");
    $id = $_POST["id"];
    $query = "DELETE FROM customers WHERE id = '$id'";
    $result = mysqli_query($conexion,$query); 
    
    if($result)
        echo "Eliminado correctamente";
    else
        echo "Error al Eliminar"; 

?>