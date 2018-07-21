var question = $('#question_form');
jQuery.validator.setDefaults({
  debug: true,
  success: 'success'
});

question.validate({
  rules: {
    preg:{
      required: true
    },
  },
  messages:{
      preg: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Por favor ingrese su pregunta'
    },
  submitHandler: function(form) {

    SwalLoader();
    
    if(question.valid()){
      var quest = $('#preg').val();
      
		sendQuestion(quest);
     
    }else{
      reject('Por favor verifique los campos')
    }
  },
  success: 'Valid'
});

function sendQuestion(quest){
	
      $.ajax({
        url: "/send_quota",
        method: 'post',
        data: {
           question: quest
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
            hola(quest);
           }
           $('#preg').val("");
        }});
}
    function SwalLoader(){
        swal2(
          'Espere',
          'Su pregunta está siendo enviada',
          'info'
          );
        swal2.showLoading();
    }

    
	function hola(quest){

		swal2({
			title: 'Logueate',
			html:'<form method="POST" id="swalLogin">'+
			'<div class="form-group row">'+
			'<label for="email" class="col-sm-4 col-form-label text-md-right">Email</label>'+
			'<div class="col-md-6">'+
			'<input id="email" type="email" class="form-control" name="email" >'+
			'</div>'+
			'</div>'+
			'<div class="form-group row">'+
			'<label for="password" class="col-md-4 col-form-label text-md-right">Clave</label>'+
			'<div class="col-md-6">'+
			'<input id="password" type="password" class="form-control" name="password" >'+
			'</div>'+
			'</div>'+
			'<div class="form-group row mb-0">'+
			'<div class="col-md-8 offset-md-4">'+
			'<button type="submit" class="btn btn-primary">'+
			'Login'+
			'</button>'+
			'</div>'+
			'</div>'+
			'</form>',
			showCancelButton: false,
			showConfirmButton: false,
		  })
		  $('#swalLogin').validate({
			rules:{
			email:{
			required:true,
			email:true
			},
			password:{
			required:true
			}
			},
			messages:{
			email:{
			required:"Please enter an email address.",
			email:"Please enter a valid email address."
			},
			password:{
			required:"Please enter a password."
			}
			},
			submitHandler:function(form){
				$.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
          }
      });
				$.ajax({
				url: 'login' , 
				type: "POST", 
				data: new FormData(form),
				cache: false, 
				processData: false,
				contentType: false, 
				success: function(data) {
          if(data.auth){

            
            sendQuestion(quest);
          }
					else
					$('#swalLogin #errorMsg').text('Some error occured, please try again!');
					},
					error:function(xhr){
					console.log(xhr.responseJSON.message);
					$('#swalLogin #errorMsg').text(xhr.responseJSON.message);
					}
				});
			}
			})
	};