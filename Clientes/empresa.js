$(function(){
    Listar();
    function Listar(){
        $.ajax({
            url: 'listarEmpresa.php',
            type: 'GET',
            success: function(respuesta){
                let tarea = JSON.parse(respuesta);
                let r ="";
                let contador=0;
                    tarea.forEach(element => {
                        r +=`<tr id = "${element.id}">
                                <td><a  class = "btn btn-info btnEditar rounded-pill" data-toggle="modal" data-target="#myModalEditar"> Editar  </a> </td>
                                <td><a  class = "btn btn-danger btnEliminar rounded-pill"> Eliminar  </a> </td>
                                <td>${element.id}</td>
                                <td>${element.name}</td>
                                <td>${element.ruc}</td>
                                <td>${element.rubro}</td>
                            </tr>`;                                                  
                        contador++;
                    });
                //llenar datos html
                $('#listaCLiente').html(r);
                $('#cantidadCliente').html("Actualmente hay un total de "+contador+" Empresas");
                }      
        })
    }
    
    $('#form_guardar').submit(function() {
        if($('#nombre_empresa').val()  && $('#ruc').val() && $('#rubro').val()
            && $('#web').val() && $('#direccion_empresa').val() && $('#referencia_empresa').val() && $('#aniversario').val()){            
                var nombres = $('#nombre_empresa').val();
                var ruc = $('#ruc').val();
                var rubro = $('#rubro').val();
                var web = $('#web').val();
                var direccion_empresa = $('#direccion_empresa').val();
                var referencia_empresa = $('#referencia_empresa').val();
                var aniversario = $('#distrito').val();       
                $.ajax({
                    url: 'guardarEmpresa.php',
                    type: 'POST',
                    data: {nombres,ruc,rubro,web,direccion_empresa,referencia_empresa,aniversario},
                    success: function(respuesta){
                    alert(respuesta);  
                    }
                });
                Listar();
                
        }
        else{
            alert("Debe completar todos los campos de texto");
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
                        r +=`<tr>
                            <td><a  class = "btn btn-info btnEditar rounded-pill" data-toggle="modal" data-target="#myModalEditar"> Editar  </a> </td>
                            <td><a  class = "btn btn-danger btnEliminar rounded-pill"> Eliminar  </a> </td>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.business}</td>
                            <td>${element.phone}</td>
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

    $(document).on('click','.btnEliminar',function(){
        if(confirm('Estas seguro de querer eliminar?')){
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('id');
            $.ajax({
                url:'eliminarEmpresa.php',
                type: 'POST',
                data: {id},
                success: function(respuesta){
                    Listar();
                    alert(respuesta);            
                }
            })
        }
    })

    $(document).on('click','.btnEditar',function(){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('id');
            var nombres = "";
            var idd = "";
            var email = "";
            var telefono = "";
            var celular = "";
            var posicion = "";
            var direccion = "";
            var distrito = "";
            var ciudad = "";
            var provincia = "";

        $.ajax({
            url:'editar.php',
            type: 'POST',
            data: {id},
            success: function(respuesta){
                let tarea = JSON.parse(respuesta);
                let r ="";
                    tarea.forEach(element => {
                        nombres = element.nombres;
                        idd = element.id;
                        email = element.email;
                        telefono = element.telefono;
                        celular = element.celular;
                        posicion = element.posicion;
                        direccion = element.direccion;
                        distrito = element.distrito;
                        ciudad = element.ciudad;
                        provincia = element.provincia;        
                    });
                //llenar datos html   
                $('#idEditar').val(idd);
                $('#nombresE').val(nombres);  
                $('#emailE').val(email);  
                $('#telefonoE').val(telefono);  
                $('#celularE').val(celular);  
                $('#posicionE').val(posicion);  
                $('#direccionE').val(direccion);  
                $('#distritoE').val(distrito);  
                $('#ciudadE').val(ciudad);
                $('#provinciaE').val(provincia);        
            }
        })
    })


    $('#form_editar').submit(function() {
           
        var id = $('#idEditar').val();         
        var nombres = $('#nombresE').val();
        var email = $('#emailE').val();
        var telefono = $('#telefonoE').val();
        var celular = $('#celularE').val();
        var posicion = $('#posicionE').val();
        var direccion = $('#direccionE').val();
        var distrito = $('#distritoE').val();
        var ciudad = $('#ciudadE').val();
        var provincia = $('#provinciaE').val();        
        $.ajax({
            url: 'editar2.php',
            type: 'POST',
            data: {id,nombres,email,telefono,celular,posicion,direccion,distrito,ciudad,provincia},
            success: function(respuesta){
            alert(respuesta);  
            }
        });
        Listar();
                
    }) 
})
