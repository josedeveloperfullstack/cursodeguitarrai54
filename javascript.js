document.querySelectorAll('.nav-button2').forEach(function(button) {
    button.addEventListener('click', function() {
        let divDestino = document.querySelector('.parrafo'); // Selecciona el primer div con la clase 'benefits'
        divDestino.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.nav-button3').forEach(function(button) {
    button.addEventListener('click', function() {
        let divDestino = document.querySelector('.contact'); // Selecciona el primer div con la clase 'benefits'
        divDestino.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.nav-button').forEach(function(button) {
    button.addEventListener('click', function() {
        window.scrollTo(0, 0);
        location.reload(); // Esto recarga la página
    });
});