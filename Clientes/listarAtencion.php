<?php 
include ("../conexion/conexion.php");

function getCampo($dato){
	if ($dato == null) {
		return "";
	} else {
		return $dato;
	}
}

function datoPersonal($dato){
	include ("../conexion/conexion.php");
	$query = "SELECT CONCAT(name,' ',last_name) AS nombres FROM people WHERE id = '$dato'";
    $result = mysqli_query($conexion,$query);
    $row = mysqli_fetch_array($result);
    return $row['nombres'];
}

	
    $query = "SELECT * FROM details_attention";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => getCampo($row['id']),
            'persona' => datoPersonal(getCampo($row['people'])),
            'empresa' => getCampo($row['business']),
            'cliente' => getCampo($row['customers']),
            'fecha' => getCampo($row['date_attention']),
            'fecha_aviso' => getCampo($row['date_notice']),
            'tipo_cliente' => getCampo($row['type_customers']),
            'origen' => getCampo($row['origin']),
            'status' => getCampo($row['status'])
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
 ?>