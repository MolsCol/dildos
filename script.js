$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    $('a[href^="#"]').click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        
      
        if (target === '#header' || $(this).hasClass('scroll-to-top')) {
            $('html, body').animate({scrollTop: 0}, 800);
            return;
        }

      
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });

    $('#custom-order-form').on('submit', function(event) {
        event.preventDefault(); 
    
        $('.error-message').text('');
        $('#form-success-message').text('');

        var isValid = true; 

        var name = $('#name').val().trim();
        if (name.length < 3) {
            $('#name-error').text('El nombre debe tener al menos 3 caracteres.');
            isValid = false;
        }

        var email = $('#email').val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (email === '') {
            $('#email-error').text('El email es obligatorio.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#email-error').text('Introduce un formato de email válido.');
            isValid = false;
        }
        
        var size = parseInt($('#size').val());
        if (isNaN(size) || size < 10 || size > 40) {
            $('#size-error').text('El tamaño debe estar entre 10cm y 40cm.');
            isValid = false;
        }

        var description = $('#description').val().trim();
        if (description.length < 10) {
            $('#description-error').text('Por favor, describe las características especiales (mínimo 10 caracteres).');
            isValid = false;
        }

        if (isValid) {
            console.log('Formulario válido. Enviando pedido...');
            
            $('#form-success-message').text('¡Pedido enviado con éxito! Nos pondremos en contacto contigo pronto.');
            
            $('#custom-order-form')[0].reset();
        } else {
            $('#form-success-message').text('Por favor, corrige los errores en el formulario.');
            $('html, body').animate({
                scrollTop: $('#pedido-section').offset().top - 50 
            }, 500);
        }
    });
});