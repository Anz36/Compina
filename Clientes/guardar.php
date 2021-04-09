<?php
    include ("../conexion/conexion.php");
    $empresa = $_POST["empresa"];
    $nombres = $_POST["nombres"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $celular = $_POST["celular"];
    $posicion = $_POST["posicion"];
    $direccion = $_POST["direccion"];
    $distrito = $_POST["distrito"];
    $ciudad = $_POST["ciudad"];
    $provincia = $_POST["provincia"];
    $query = "INSERT INTO customers (business,name,position,address,district,city,province,email,phone,movil) VALUES ('$empresa','$nombres', '$posicion', '$direccion', '$distrito', '$ciudad', '$provincia', '$email', '$telefono', '$celular')";
    $result = mysqli_query($conexion,$query); 
    if($result)
        echo "Agregado correctamente";
    else
        echo "Error al Agregar";

?>