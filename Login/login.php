<?php
    include ("../conexion/conexion.php");
    session_start();  
    $_SESSION['usuario'] = "-1";  
    $usuario=$_POST['usuario'];
    $password=md5($_POST['password']);
    $sql = "SELECT * FROM users where user_login = '$usuario' and password = '$password'";
    $result = mysqli_query($conexion,$sql);

    while($datos = mysqli_fetch_array($result)){
        $_SESSION['usuario'] = $datos['people'];
    }

    if($_SESSION['usuario']){
        header("Location: ../Clientes/index.html");
    }
    else{
        header("Location: index.html?mensaje=Datos incorrectos");
    }
?>