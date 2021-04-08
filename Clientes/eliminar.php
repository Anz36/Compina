<?php
    include ("../conexion/conexion.php");
    $id = $_POST['id'];
    $nombres = "";
    $email = "";
    $telefono = "";
    $celular = "";
    $posicion = "";
    $direccion = "";
    $distrito = "";
    $ciudad = "";
    $provincia = "";
    $query = "SELECT * FROM customers WHERE id = '$id'";
    $result = mysqli_query($conexion,$query); 
        while($row = mysqli_fetch_array($result)){
            $nombres = $row['name'];
            $email = $row['email'];
            $telefono = $row['phone'];
            $celular = $row['movil'];
            $posicion = $row['position'];
            $direccion = $row['address'];
            $distrito = $row['district'];
            $ciudad = $row['city'];
            $provincia = $row['province'];
        }  
    $query = "INSERT INTO customerstemp (name,position,address,district,city,province,email,phone,movil) VALUES ('$nombres', '$posicion', '$direccion', '$distrito', '$ciudad', '$provincia', '$email', '$telefono', '$celular')";
    $result = mysqli_query($conexion,$query);
    $query = "DELETE FROM customers WHERE id = '$id'";
    $result = mysqli_query($conexion,$query);
    if($result)
        echo "Eliminado correctamente";
    else
        echo "Error al Eliminar";
    
      

?>