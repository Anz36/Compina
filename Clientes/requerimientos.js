$.ajax({
            url: 'listarRequerimientos.php',
            type: 'GET',
            success: function (respuesta){
                let tarea = JSON.parse(respuesta);
                let r ='';
                let c = 0;
                    tarea.forEach(element => {
                        r +=`<tr id = ${element.id}>
                                <td><a class = "btn btn-info btnAtender rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Atender  </a> </td>
                                <td>${element.id}</td>
                                <td>${element.empresa}</td>
                                <td>${element.nombre}</td>
                                <td>${element.email}</td>
                                <td>${element.telefono}</td>
                                <td>${element.fecha}</td>
                                <td>${element.mensaje}</td>
                                <td>${element.origen}</td>
                            </tr>`; 
                            c++;                                                 
                    });
                //llenar datos html
                $('#cantidadRequerimientos').html("Actualmente hay un total de "+c+" requerimientos");
                $('#listaRequerimientos').html(r);
                }      
    })

$(document).on('click','.btnAtender',function(){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('id');
            var idd = "";
            var empresa = "";
            var cliente = "";

            $.ajax({
            url:'atender.php',
            type: 'POST',
            data: {id},
            success: function(respuesta){
                let tarea = JSON.parse(respuesta);
                let r ="";
                    tarea.forEach(element => {
                        idd = element.id;
                        empresa = element.empresa;
                        cliente = element.cliente;
                    });
                //llenar datos html   
                $('#idRequerimiento').html("ID : "+idd);
                $('#idDato').val(idd);
                $('#empresaRequerimiento').html("Empresa : "+empresa);
                $('#clienteRequerimiento').html("Cliente  : "+cliente);
            }
        }) 
})

$(document).on('click','.btnConfirmar',function(){
    let id = $('#idDato').val();
    $.ajax({
                url:'atencion.php',
                type: 'POST',
                data: {id},
                success: function(respuesta){
                    window.location.href = respuesta;
                }
            })
})