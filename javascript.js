document.querySelectorAll('.nav-button').forEach(function(button) {
    button.addEventListener('click', function() {
        window.scrollTo(0, 0);
        location.reload(); // Esto recarga la página
    });
});

