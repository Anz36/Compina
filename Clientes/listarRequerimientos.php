<?php
    function setCampo($campo,$out){
        if($campo == null){
            return "Sin ".$out;
        }
        else 
        return $out;
    }
    include ("../conexion/conexion.php");
    $query = "SELECT *  FROM requirements";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => setCampo($row['idconsulta'],"Id"),
            'nombre' => setCampo($row['nombres'],"Nombre"),
            'empresa' => setCampo($row['empresa'],"Empresa"),
            'email' => setCampo($row['email'],"Email"),
            'telefono' => setCampo($row['telefono'],"Telefono"),
            'fecha' => setCampo($row['fecha_consulta'],"Fecha"),
            'asunto' => setCampo($row['asunto'],"Asunto")
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>