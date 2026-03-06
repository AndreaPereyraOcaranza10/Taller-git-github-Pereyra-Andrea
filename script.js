// Validación del formulario y feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud de pedido. Nos contactaremos pronto.`);
    this.reset();
});

// Función unificada para el scroll (Header + Botón Volver Arriba)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const backToTopBtn = document.getElementById('backToTop'); // Lo buscamos adentro para asegurar que ya exista
    
    // Lógica del Nav
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    // Lógica del Botón (si existe el botón en el HTML)
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Acción de volver al inicio (usando delegación de eventos para evitar el error de null)
document.addEventListener('click', function(e) {
    if (e.target.id === 'backToTop' || e.target.closest('#backToTop')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});