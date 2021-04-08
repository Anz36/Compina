$(function(){
    $.ajax({
        url: 'listar.php',
        type: 'GET',
        success: function(respuesta){
            let tarea = JSON.parse(respuesta);
            let r ="";
            let contador=0;
                tarea.forEach(element => {
                    r +=`<tr>
                            <td>Editar</td>
                            <td>Elimar</td>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.business}</td>
                        </tr>`;                                                  
                    contador++;
                });
            //llenar datos html
            $('#listaCLiente').html(r);
            $('#cantidadCliente').html("Actualmente hay un total de "+contador+" Clientes");
            }      
    })

    $('#form_guardar').submit(function(e) {
        const datos = {
            nombres: $('#nombres').val(),
            apellidos: $('#apellidos').val(),
            email: $('#email').val(),
            telefono: $('#telefono').val(),
            celular: $('#celular').val(),
            direccion: $('#direccion').val(),
            posicion: $('#posicion').val(),
            distrito: $('#distrito').val(),
            ciudad: $('#ciudad').val(),
            provincia: $('#provincia').val(),
        };
        $.post('insertarCliente.php', datos, function (response){
            console.log(response);
        })
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
                        r +=`<tr>
                            <td></td>
                            <td></td>
                            <td>${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>${element.empresa}</td>
                        </tr>`; 
                                                 
                        contador++;
                    });
                //llenar datos html
                $('#listaCLiente').html(r);
                $('#cantidadCliente').html("Actualmente hay un total de "+contador+" Clientes");
                }
            })
        }
    })
$.ajax({
        url: 'listarRequerimientos.php',
        type: 'GET',
        success: function (respuesta){
            let tarea = JSON.parse(respuesta);
            let r ='';
            let c = 0;
                tarea.forEach(element => {
                    r +=`<tr>
                            <td></td>
                            <td></td>
                            <td>${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>${element.empresa}</td>
                            <td>${element.email}</td>
                            <td>${element.telefono}</td>
                            <td>${element.fecha}</td>
                            <td>${element.asunto}</td>
                        </tr>`; 
                        c++;                                                 
                });
            //llenar datos html
            console.log(c);
            $('#listaRequerimientos').html(r);
            }      
    })
})
