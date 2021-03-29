$(function(){
    $.ajax({
        url: 'listar.php',
        type: 'GET',
        success: function(respuesta){
            let tarea = JSON.parse(respuesta);
            let r ="";
            let contador=0;
                tarea.forEach(element => {
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

    $('#buscar').keyup(function(){        
        if(($('#buscar').val()) !== ""){
            let contador = 0;
            let buscado = $('#buscar').val();
            console.log(buscado);
            $.ajax({
                url: 'buscar.php',
                type: 'POST',
                data: {buscado},
                success: function(respuesta){
                    let tarea = JSON.parse(respuesta);
                    let r ="";
                    tarea.forEach(element => {
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
        }
    })
})