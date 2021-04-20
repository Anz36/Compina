    $.ajax({
            url: 'obtenerUsuario.php',
            type: 'GET',
            success: function(respuesta){
                let r =respuesta;                
                //llenar datos html
                $('#usuariosession').html(r);
                }      
        })
$.ajax({
            url: 'listarAtencion.php',
            type: 'GET',
            success: function (respuesta){
                let tarea = JSON.parse(respuesta);
                let r ='';
                let c = 0;
                    tarea.forEach(element => {
                        r +=`<tr id = ${element.id}>
                                <td><a class = "btn btn-info btnAtenderEditar rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Ver/Editar  </a> </td>
                                <td><a class = "btn btn-warning btnAtender2 rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Ver Historial  </a> </td>
                                <td><a class = "btn btn-success btnAtender3 rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Completado  </a> </td>
                                <td>${element.id}</td>
                                <td>${element.persona}</td>
                                <td>${element.cliente}</td>
                                <td>${element.empresa}</td>
                                <td>${element.fecha}</td>
                                <td>${element.fecha_aviso}</td>
                                <td>${element.tipo_cliente}</td>
                                <td>${element.origen}</td>
                                <td>${element.status}</td>
                            </tr>`; 
                            c++;                                                 
                    });
                //llenar datos html
                $('#cantidadAtencion').html("Actualmente hay un total de "+c+" atenciones");
                $('#listarAtencion').html(r);
                }      
})

$(document).on('click','.btnAtenderEditar',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('id');
        
    //llenar datos html   
    $('#idDatoAtender').val(id);    
       
})

$('#form_atenderFecha').submit(function() {
    if($('#fechaaviso').val()){            
            var fecha = $('#fechaaviso').val();  
            var id = $('#idDatoAtender').val();       
            $.ajax({
                url: 'editaratencion.php',
                type: 'POST',
                data: {fecha,id},
                success: function(respuesta){
                alert(respuesta);  
                }
            });
            
            
    }
    else{
        alert("Debe completar todos los campos de texto");
    } 
           
    
})



