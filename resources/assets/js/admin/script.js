
     $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
    });
    $('#example').DataTable({
        processing: true,
        serverSide: true,
        ajax: '/admin/data',
        columns: [
            
            { data: 'question' },
            { data: 'badword' },
            { data: 'name'},
            { data: 'status' },
            { data: 'created_at' },
        ]
    });
	var table = $('#badcontrol').DataTable({
        processing: true,
        serverSide: true,
        ajax: '/admin/bad',
        columns: [
            {'data': 'id'},
            { data: 'word'},
            
            { data: 'status'},
            { data: 'created_at'},
            { 'data': null},
        ],
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": '<div class="row"><div class="col-md-5"><a id="edit" class="btn btn-primary">Editar</a></div><div class="col-md-5 col-md-offset-1"><a id="delete" class="btn btn-danger">Eliminar</a></div></div>'
        } ]
    });
	$('#badcontrol tbody').on( 'click', '#edit', function () {
		var data = table.row( $(this).parents('tr') ).data();
		swal2({
            'title':'Editar palabra',
            html:'<form method="POST" id="editw">'+
            '<div class="form-group row">'+
			'<label for="word" class="col-sm-4 col-form-label text-md-right">Palabra</label>'+
			'<div class="col-md-6">'+
			'<input id="text" id="inputword" type="text" class="form-control" name="inputword" value='+data['word']+' >'+
			'</div>'+
            '</div>'+
            '<div class="form-group row mb-0">'+
			'<div class="col-md-8 offset-md-4">'+
			'<button type="submit" class="btn btn-primary">'+
			'Editar'+
			'</button>'+
			'</div>'+
			'</div>'+
			'</form>',
			showCancelButton: false,
			showConfirmButton: false,
		  })
		  
        var formse = $('#editw');
          
          formse.validate({
              rules: {
                    palabra:{
                    required: true
                  },
                },
                messages:{
                    palabra: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Por favor ingrese su pregunta'
                  },
                submitHandler: function(form) {
           
                  SwalLoader();
               
                  if(formse.valid()){
                    let value = formse.serializeArray()
					let valor = value[0].value;
					
                    editword(valor,data['id']);
                
                  }else{
                    reject('Por favor verifique los campos')
                  }
                },
                success: 'Valid'
              });
	} );
	$('#badcontrol tbody').on( 'click', '#delete', function () {
		
        var data = table.row( $(this).parents('tr') ).data();
		const swalWithBootstrapButtons = swal2.mixin({
			confirmButtonClass: 'btn btn-success',
			cancelButtonClass: 'btn btn-danger',
			buttonsStyling: false,
		  })
		  
		  swalWithBootstrapButtons({
			title: 'Quiere Eliminar la palabra?',
			text: "Es una accion irreversible",
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si, borrala',
			cancelButtonText: 'No, cancelar!',
			reverseButtons: true
		  }).then((result) => {
			if (result.value) {
			  deleteword(data['id']);
			} else if (
			  // Read more about handling dismissals
			  result.dismiss === swal.DismissReason.cancel
			) {
			  swalWithBootstrapButtons(
				'Cancelado',
				'Su palabra no fue eliminada',
				'error'
			  )
			}
		  })
		  
        
    } );
    $('#agregar').click(function() {
        swal2({
            'title':'Agregar palabra',
            html:'<form method="POST" id="formword">'+
            '<div class="form-group row">'+
			'<label for="word" class="col-sm-4 col-form-label text-md-right">Palabra</label>'+
			'<div class="col-md-6">'+
			'<input id="text" id="inputword" type="text" class="form-control" name="inputword" >'+
			'</div>'+
            '</div>'+
            '<div class="form-group row mb-0">'+
			'<div class="col-md-8 offset-md-4">'+
			'<button type="submit" class="btn btn-primary">'+
			'Agregar'+
			'</button>'+
			'</div>'+
			'</div>'+
			'</form>',
			showCancelButton: false,
			showConfirmButton: false,
          })
          
          var formse = $('#formword');
          console.log(formse)
          formse.validate({
              rules: {
                    palabra:{
                    required: true
                  },
                },
                messages:{
                    palabra: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Por favor ingrese su pregunta'
                  },
                submitHandler: function(form) {
           
                  SwalLoader();
               
                  if(formse.valid()){
                    let value = formse.serializeArray()
                    let data = value[0].value;
                    sendword(data);
                
                  }else{
                    reject('Por favor verifique los campos')
                  }
                },
                success: 'Valid'
              });
     
     
     
            });
     

      function SwalLoader(){
        swal2(
          'Espere',
          'La palabra esta siendo agregada',
          'info'
          );
        swal2.showLoading();
    }
function sendword(data){
    $.ajax({
        url: "/admin/badup",
        method: 'post',
        data: {
           word: data
        },
        success: function(response){
           console.log(response.status)
           if(response.status=='true'){
            swal2('Exito',
            response.message,
            'success').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else if (response.status == 'false'){
            swal2('Oopps!...',
            response.message,
            'error').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else{
            
           }
           $('#palabra').val("");
           
        }});

}
function editword(data,id){
    $.ajax({
        url: "/admin/editbad",
        method: 'post',
        data: {
		   word: data,
		   id: id
        },
        success: function(response){
           console.log(response.status)
           if(response.status=='true'){
            swal2('Exito',
            response.message,
            'success').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else if (response.status == 'false'){
            swal2('Oopps!...',
            response.message,
            'error').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else{
            
           }
           $('#palabra').val("");
           
        }});

}
function deleteword(id){
    $.ajax({
        url: "/admin/deletebad",
        method: 'post',
        data: {
		   
		   id: id
        },
        success: function(response){
           console.log(response.status)
           if(response.status=='true'){
            swal2('Exito',
            response.message,
            'success').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else if (response.status == 'false'){
            swal2('Oopps!...',
            response.message,
            'error').then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
           }else{
            
           }
           $('#palabra').val("");
           
        }});

}

