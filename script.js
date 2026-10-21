// Interactividad para el formulario y navegación

document.addEventListener('DOMContentLoaded', () => {
    const propertyCards = document.querySelectorAll('.property-card');

    // Envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo en breve.`);
        contactForm.reset();
    });

    // Menú móvil toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', () => {
        const headerHeight = header.offsetHeight;
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = headerHeight + 'px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'var(--bg-secondary)';
            navMenu.style.padding = '24px';
            navMenu.style.borderBottom = '1px solid var(--border-color)';
        }
    });

    // Scroll suave para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header con efecto al hacer scroll
    const navContainer = document.querySelector('.nav-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = '90px';
            navContainer.style.height = '90px';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.height = '120px';
            navContainer.style.height = '120px';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Animación de entrada para tarjetas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    propertyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
