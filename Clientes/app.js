$(function(){
    $.ajax({
        url: 'listar.php',
        type: 'GET',
        success: function(respuesta){
            let contador = 0;
            let r="";
            let lista = JSON.parse(respuesta);
            lista.forEach(element => {
                console.log(element.id);
            });

            //llenar datos html
            $('listaCLiente').html(r);
            $('cantidadCliente').html("Actualmente hay un total de "+contador+" Clientes");
        }   
    })
})