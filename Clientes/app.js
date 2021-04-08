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

<<<<<<< HEAD
    $('#form_guardar').submit(function() {
        var nombres = $('#nombres').val();
        var apellidos = $('#apellidos').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
        var celular = $('#celular').val();
        var posicion = $('#posicion').val();
        var direccion = $('#direccion').val();
        var distrito = $('#distrito').val();
        var distrito = $('#ciudad').val();
        var provincia = $('#provincia').val();

        $.ajax({
            url: "guardar.php",
            type: 'POST',
            data: {nombres,apellidos,email,telefono,celular,posicion,direccion,distrito,provincia},
            success: function(respuesta){
                alert(respuesta);
            }
        });
=======
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
>>>>>>> 8d9003dde15f956d8e3df7785fa079efae236ed8
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
