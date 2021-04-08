<?php
    include ("../conexion/conexion.php");
    $id = $_POST['id'];
    $nombres = "";
    $ruc = "";
    $rubro = "";
    $web = "";
    $direccion_empresa = "";
    $referencia_empresa = "";
    $aniversario = "";
    $query = "SELECT * FROM business WHERE id = '$id'";
    $result = mysqli_query($conexion,$query); 
        while($row = mysqli_fetch_array($result)){
            $nombres = $row['name'];
            $ruc = $row['ruc'];
            $rubro = $row['rubro'];
            $direccion_empresa = $row['address'];
            $referencia_empresa = $row['address_reference'];
            $aniversario = $row['anniversary'];
            $web = $row['page_web'];
        }  
        $query = "INSERT INTO businessTemp (name,ruc,rubro,address,address_reference,anniversary,page_web) VALUES ('$nombres', '$ruc', '$rubro', '$direccion_empresa', '$referencia_empresa', '$aniversario', '$web')";
    $result = mysqli_query($conexion,$query);
    $query = "DELETE FROM business WHERE id = '$id'";
    $result = mysqli_query($conexion,$query);
    if($result)
        echo "Eliminado correctamente";
    else
        echo "Error al Eliminar";
    
      

?>