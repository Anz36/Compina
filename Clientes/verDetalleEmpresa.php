<?php 


include ("../conexion/conexion.php");
$id =  $_POST['id'];
$query = "SELECT business as empresa FROM customers WHERE id = '13'";
$result = mysqli_query($conexion,$query);
$json = array();
$row = mysqli_fetch_array($result);
$codigoEmpresa = $row['empresa'];
//obtener datos de la empresa
$query = "SELECT * FROM business WHERE id = '$codigoEmpresa'";
$result = mysqli_query($conexion,$query);
while ($row = mysqli_fetch_array($result)){
	$json[]= array(
		'nombre' =>  $row['name'],
		'ruc' => $row['ruc'],
		'rubro' => $row['rubro'],
		'direccion' => $row['address'],
		'referencia' => $row['address_reference'],
		'aniversario' => $row['anniversary'],
		'web' => $row['page_web']
	);
}
	$jsonString = json_encode($json);
	echo $jsonString;

 ?>
