$(function(){
    Listar();
    ListarUsuario();    
    function ListarUsuario(){
        $.ajax({
            url: 'obtenerUsuario.php',
            type: 'GET',
            success: function(respuesta){
                let r =respuesta;                
                //llenar datos html
                $('#usuariosession').html(r);
                }      
        })
    }
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
                                <td><a  class = "btn btn-warning btnVer rounded-pill" data-toggle="modal" data-target="#myModalVer"> Ver  </a> </td>
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
    $('#from_empresa').submit(function() {
        if($('#nombre_empresa').val()  && $('#ruc').val() && $('#rubro').val()
            && $('#web').val() && $('#direccion_empresa').val() && $('#referencia_empresa').val() && $('#aniversario').val()){            
                var nombres = $('#nombre_empresa').val();
                var ruc = $('#ruc').val();
                var rubro = $('#rubro').val();
                var web = $('#web').val();
                var direccion_empresa = $('#direccion_empresa').val();
                var referencia_empresa = $('#referencia_empresa').val();
                var aniversario = $('#aniversario').val();       
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
                url: 'buscarEmpresa.php',
                type: 'POST',
                data: {buscado},
                success: function(respuesta){
                    let tarea = JSON.parse(respuesta);
                    let r ="";
                    tarea.forEach(element => {
                        r +=`<tr id = "${element.id}">
                            <td><a  class = "btn btn-warning btnVer rounded-pill" data-toggle="modal" data-target="#myModalVer"> Ver  </a> </td>
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
                $('#cantidadCliente').html("Actualmente hay un total de "+contador+" Clientes");
                }
            })
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
            var ruc = "";
            var rubro = "";
            var web = "";
            var direccion_empresa = "";
            var referencia_empresa = "";
            var aniversario = "";

        $.ajax({
            url:'editarEmpresa.php',
            type: 'POST',
            data: {id},
            success: function(respuesta){
                let tarea = JSON.parse(respuesta);
                let r ="";
                    tarea.forEach(element => {
                        nombres = element.name;
                        idd = element.id;
                        ruc = element.ruc;
                        rubro = element.rubro;
                        direccion_empresa = element.address;
                        referencia_empresa = element.address_reference;
                        aniversario = element.anniversary;
                        web = element.page_web;       
                    });
                //llenar datos html   
                $('#idEditar').val(idd);
                $('#nombre_empresaE').val(nombres);  
                $('#rucE').val(ruc);  
                $('#rubroE').val(rubro);  
                $('#webE').val(web);  
                $('#direccion_empresaE').val(direccion_empresa);  
                $('#referencia_empresaE').val(referencia_empresa);  
                $('#aniversarioE').val(aniversario);              
            }
        })
    })

    $(document).on('click','.btnVer',function(){
        let elemet = $(this)[0].parentElement.parentElement;
        let id = $(elemet).attr('id');
        $.ajax({
            url: 'verEmpresa.php',
            type: 'POST',
            data: {id},
            success: function(respuesta){
                let tarea = JSON.parse(respuesta);
                let r = "";
                tarea.forEach(element => {
                    ruc = element.ruc;
                    rubro = element.rubro;
                    direccion = element.direccion;
                    referencia = element.referencia;
                    aniversario = element.aniversario;
                    web = element.web;
                });
                $('#verrRUC').val(ruc);
                $('#verRubro').val(rubro);
                $('#verDireccionEmpresa').val(direccion);
                $('#verReferencia').val(referencia);
                $('#verAniversario').val(aniversario);
                $('#verSitioWeb').val(web);
            }
        })
    })


    $('#form_editar').submit(function() {
           
        var id = $('#idEditar').val();         
        var nombres = $('#nombre_empresaE').val();
        var ruc = $('#rucE').val();
        var rubro = $('#rubroE').val();
        var web = $('#webE').val();
        var direccion_empresa = $('#direccion_empresaE').val();
        var referencia_empresa = $('#referencia_empresaE').val();
        var aniversario = $('#aniversarioE').val();          
        $.ajax({
            url: 'editar2Empresa.php',
            type: 'POST',
            data: {id,nombres,ruc,rubro,web,direccion_empresa,referencia_empresa,aniversario},
            success: function(respuesta){
            alert(respuesta);  
            }
        });
        Listar();
                
    }) 
})
