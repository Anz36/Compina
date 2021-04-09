<?php
    include ("../conexion/conexion.php");
    $id = $_POST["id"];
    $nombres = $_POST["nombres"];
    $ruc = $_POST["ruc"];
    $rubro = $_POST["rubro"];
    $web = $_POST["web"];
    $direccion_empresa = $_POST["direccion_empresa"];
    $referencia_empresa = $_POST["referencia_empresa"];
    $aniversario = $_POST["aniversario"];
    $query = "UPDATE business SET name='$nombres',ruc='$ruc',rubro='$rubro',address='$direccion_empresa',address_reference='$referencia_empresa',anniversary='$aniversario',page_web='$web' WHERE id = '$id'";
    $result = mysqli_query($conexion,$query);   
    
    if($result)
        echo "Editado correctamente";
    else
        echo "Error al Editar";
    
      

?>