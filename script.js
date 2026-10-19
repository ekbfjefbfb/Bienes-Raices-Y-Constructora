// Interactividad para el filtrado de propiedades y formulario

document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filterBtn');
    const locationFilter = document.getElementById('locationFilter');
    const typeFilter = document.getElementById('typeFilter');
    const priceFilter = document.getElementById('priceFilter');
    const propertyCards = document.querySelectorAll('.property-card');

    // Filtrado de propiedades
    filterBtn.addEventListener('click', () => {
        const selectedLocation = locationFilter.value;
        const selectedType = typeFilter.value;
        const selectedPrice = priceFilter.value;

        propertyCards.forEach(card => {
            const cardLocation = card.getAttribute('data-location');
            const cardType = card.getAttribute('data-type');
            const cardPrice = card.getAttribute('data-price');

            let matchesLocation = (selectedLocation === 'all' || cardLocation === selectedLocation);
            let matchesType = (selectedType === 'all' || cardType === selectedType);
            let matchesPrice = (selectedPrice === 'all' || cardPrice === selectedPrice);

            if (matchesLocation && matchesType && matchesPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

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

    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '120px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'var(--bg-secondary)';
            navMenu.style.padding = '24px';
            navMenu.style.borderBottom = '1px solid var(--border-color)';
        }
    });
});
