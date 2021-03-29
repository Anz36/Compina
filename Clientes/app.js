$(function(){
    $.ajax({
        url: 'listar.php',
        type: 'GET',
        success: function(respuesta){
            let contador = 0;
            let r="";
            let lista = JSON.parse(respuesta);
            lista.forEach(element => {
                r +="<tr>"+
                        "<td></td>"+
                        "<td></td>"+ 
                        "<td>"+element.id+"</td>"+
                        "<td>"+element.nombre+"</td>"+
                        "<td>"+element.empresa+"</td>"+
                    "</tr>";
                contador++;
            });

            //llenar datos html
            $('#listaCLiente').html(r);
            $('#cantidadCliente').html("Actualmente hay un total de "+contador+" Clientes");
        }   
    })
})