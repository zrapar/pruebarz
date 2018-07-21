<div class="newsletter-subscribe">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">¿Alguna duda? Haz tu pregunta</h2>
        </div>
        {{ Form::open(['class' => 'contactForm','id' => 'question_form', 'role' => 'form', 'method' => 'post']) }}
            <div class="form-group"><input class="form-control" id="preg" type="text" name="preg" required="true" placeholder="Escribe aqui tu pregunta"></div>
            <div class="form-group">
                {{ Form::submit('Enviar pregunta', ['class' => 'btn btn-primary d-flex mx-auto']) }}
            </div>
        {{ Form::close() }}
    </div>
</div>