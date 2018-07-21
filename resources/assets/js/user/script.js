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
      $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
      $.ajax({
        url: "/send_quota",
        method: 'post',
        data: {
           question: $('#preg').val()
        },
        success: function(response){
           console.log(response.status)
           if(response.status=='true'){
            swal2('Exito',
            response.message,
            'success');
           }else{
            swal2('Oopps!...',
            response.message,
            'error');
           }
        }});
     
    }else{
      reject('Por favor verifique los campos')
    }
  },
  success: 'Valid'
});
    function SwalLoader(){
        swal2(
          'Espere',
          'Su pregunta está siendo enviada',
          'info'
          );
        swal2.showLoading();
    }



