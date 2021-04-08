<?php
    include ("../conexion/conexion.php");
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $celular = $_POST["celular"];
    $posicion = $_POST["posicion"];
    $direccion = $_POST["direccion"];
    $distrito = $_POST["distrito"];
    $ciudad = $_POST["ciudad"];
    $provincia = $_POST["provincia"];
    $name = $nombres." ".$apellidos;
    $query = "INSERT INTO customers (name,position,address,district,city,province,email,phone,movil) VALUES ('$name', '$posicion', '$direccion', '$distrito', '$ciudad', '$provincia', '$email', '$telefono', '$celular')";
    $result = mysqli_query($conexion,$query);   
    
    if($result)
        echo "Agregado correctamente";
    else
        echo "Error al Agregar";
    

    


?>