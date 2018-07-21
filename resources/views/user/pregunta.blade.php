<div class="newsletter-subscribe">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">¿Alguna duda? Haz tu pregunta</h2>
        </div>
        {{ Form::open(['url' => '/send_quota', 'class' => 'contactForm','id' => 'question_form', 'role' => 'form', 'method' => 'post']) }}
            <div class="form-group"><input class="form-control" type="text" name="question" required="" placeholder="Escribe aqui tu pregunta"></div>
            <div class="form-group">
                {{ Form::submit('Enviar pregunta', ['class' => 'btn btn-primary d-flex mx-auto']) }}
            </div>
        {{ Form::close() }}
    </div>
</div>