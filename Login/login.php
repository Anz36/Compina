<?php
    include ("../conexion/conexion.php");
    session_start();  
    $_SESSION['usuario'] = "-1";  
    $usuario=$_POST['usuario'];
    $password=md5($_POST['password']);
    $sql = "SELECT * FROM usuarios where usuario = '$usuario' and password = '$password'";
    $result = mysqli_query($conexion,$sql);

    while($datos = mysqli_fetch_array($result)){
        $_SESSION['usuario'] = $datos['idusuario'];
    }

    if($_SESSION['usuario'] != "-1"){
        header("Location: ../Clientes/index.php");
    }
    else{
        header("Location: login.php?mensaje=Datos incorrectos");
    }
    echo "Daniel vuelve";
?>