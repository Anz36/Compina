<?php
    include ("../conexion/conexion.php");
    $id = $_POST["id"];
    $nombres = $_POST["nombres"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $celular = $_POST["celular"];
    $posicion = $_POST["posicion"];
    $direccion = $_POST["direccion"];
    $distrito = $_POST["distrito"];
    $ciudad = $_POST["ciudad"];
    $provincia = $_POST["provincia"];
    $empresa = $_POST["empresa"];
    $query = "UPDATE customers SET name='$nombres',position='$posicion',address='$direccion',district='$distrito',city='$ciudad',province='$provincia',email='$email',phone='$telefono',movil='$celular',business = '$empresa' WHERE id = '$id'";
    $result = mysqli_query($conexion,$query);   
    
    if($result)
        echo "Editado correctamente";
    else
        echo "Error al Editar";
    
      

?>