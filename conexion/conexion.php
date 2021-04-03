<?php
    #$conexion = mysqli_connect("108.163.150.164","rgarcia","+Luz+589+","rgarcia_CMR_ACTUAL") or die ("Conexion no establecida");

    #Base de Datos - NO MODIFICAR.
    function obtenerBaseDeDatosSecundaria(){
    $password = obtenerVariableDelEntornoSecundaria("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntornoSecundaria("MYSQL_USER");
    $dbName = obtenerVariableDelEntornoSecundaria("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
    }
    #Obtener datos para ingresar a la DBA - Modificable dentro del archivo "env.php".
    function obtenerVariableDelEntornoSecundaria($clave){ 
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $archivo = "env.php";
        if (!file_exists($archivo)) {
            throw new Exception("El archivo de las variables de entorno ($archivo) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($archivo);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$clave])) {
        return $vars[$clave];
    } else {
        throw new Exception("La clave especificada (" . $clave . ") no existe en el archivo de las variables de entorno");
    }
}

	$db = obtenerBaseDeDatosSecundaria();
	if ($db) {
		echo "Hola Mundo";
	} else {
		echo "Adios Mundo";
	}


?>