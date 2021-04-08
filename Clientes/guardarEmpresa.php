<?php
    include ("../conexion/conexion.php");
    $nombres = $_POST["nombre_empresa"];
    $ruc = $_POST["ruc"];
    $rubro = $_POST["rubro"];
    $web = $_POST["web"];
    $direccion_empresa = $_POST["direccion_empresa"];
    $referencia_empresa = $_POST["referencia_empresa"];
    $aniversario = $_POST["aniversario"];
    $query = "INSERT INTO business (name,ruc,rubro,address,address_reference,anniversary,page_web) VALUES ('$nombres', '$ruc', '$rubro', '$direccion_empresa', '$referencia_empresa', '$aniversario', '$web')";
    $result = mysqli_query($conexion,$query);   
    
    if($result)
        echo "Agregado correctamente";
    else
        echo "Error al Agregar";

?>