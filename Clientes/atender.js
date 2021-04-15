$.ajax({
            url: 'listarAtencion.php',
            type: 'GET',
            success: function (respuesta){
                let tarea = JSON.parse(respuesta);
                let r ='';
                let c = 0;
                    tarea.forEach(element => {
                        r +=`<tr id = ${element.id}>
                                <td><a class = "btn btn-info btnAtender rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Ver/Editar  </a> </td>
                                <td><a class = "btn btn-warning btnAtender rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Ver Historial  </a> </td>
                                <td><a class = "btn btn-success btnAtender rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Completado  </a> </td>
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



