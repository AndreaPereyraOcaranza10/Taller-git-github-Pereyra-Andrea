// Validación del formulario y feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    
    // Simulación de envío
    alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud de pedido. Nos contactaremos pronto.`);
    this.reset();
});

// Cambio de estilo en el header al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '20px 8%';
    }
});