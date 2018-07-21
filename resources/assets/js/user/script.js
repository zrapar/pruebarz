var status = $('#status').data("status");
if($('#status').lenght){

    if ( status == 1 ) {
        swal({
            position: 'top-end',
            type: 'success',
            title: 'Su pregunta fue enviada, pronto sera respondido',
            showConfirmButton: false
          });
      }else{
        swal({
          position: 'top-end',
          type: 'error',
          title: 'Su pregunta no fue enviada, ya que contiene malas palabras',
          showConfirmButton: false
        });
      }
}