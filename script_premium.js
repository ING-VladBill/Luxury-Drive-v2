// Variables globales
let reservas = [];
let currentVehicle = null;

// Datos de vehículos con imágenes (manteniendo los vehículos premium)
const vehicleImages = {
    'Mercedes-Benz S-Class 2024': [
        'imagenes/Mercedes-S-Class/mercedes-s1.jpg',
        'imagenes/Mercedes-S-Class/mercedes-s2.jpg',
        'imagenes/Mercedes-S-Class/mercedes-s3.jpg',
        'imagenes/Mercedes-S-Class/mercedes-s4.jpg',
        'imagenes/Mercedes-S-Class/mercedes-s5.jpg'
    ],
    'BMW X7 M50i 2024': [
        'imagenes/BMW-X7/bmw-x7-1.jpg',
        'imagenes/BMW-X7/bmw-x7-2.jpg',
        'imagenes/BMW-X7/bmw-x7-3.jpg',
        'imagenes/BMW-X7/bmw-x7-4.jpg',
        'imagenes/BMW-X7/bmw-x7-5.jpg'
    ],
    'Audi A8 L 2024': [
        'imagenes/Audi-A8/audi-a8-1.jpg',
        'imagenes/Audi-A8/audi-a8-2.jpg',
        'imagenes/Audi-A8/audi-a8-3.jpg',
        'imagenes/Audi-A8/audi-a8-4.jpg',
        'imagenes/Audi-A8/audi-a8-5.jpg'
    ],
    'Porsche Cayenne Turbo 2024': [
        'imagenes/Porsche-Cayenne/porsche-cayenne-1.jpg',
        'imagenes/Porsche-Cayenne/porsche-cayenne-2.jpg',
        'imagenes/Porsche-Cayenne/porsche-cayenne-3.jpg',
        'imagenes/Porsche-Cayenne/porsche-cayenne-4.jpg',
        'imagenes/Porsche-Cayenne/porsche-cayenne-5.jpg'
    ],
    'Bentley Continental GT 2024': [
        'imagenes/Bentley-Continental/bentley-continental-1.jpg',
        'imagenes/Bentley-Continental/bentley-continental-2.jpg',
        'imagenes/Bentley-Continental/bentley-continental-3.jpg',
        'imagenes/Bentley-Continental/bentley-continental-4.jpg',
        'imagenes/Bentley-Continental/bentley-continental-5.jpg'
    ],
    'Range Rover Autobiography 2024': [
        'imagenes/Range-Rover/range-rover-1.jpg',
        'imagenes/Range-Rover/range-rover-2.jpg',
        'imagenes/Range-Rover/range-rover-3.jpg',
        'imagenes/Range-Rover/range-rover-4.jpg',
        'imagenes/Range-Rover/range-rover-5.jpg'
    ],
    'Mercedes-AMG G63 2024': [
        'imagenes/Mercedes-G63/mercedes-g63-1.jpg',
        'imagenes/Mercedes-G63/mercedes-g63-2.jpg',
        'imagenes/Mercedes-G63/mercedes-g63-3.jpg',
        'imagenes/Mercedes-G63/mercedes-g63-4.jpg',
        'imagenes/Mercedes-G63/mercedes-g63-5.jpg'
    ],
    'Audi Q8 55 TFSI 2024': [
        'imagenes/Audi-Q8/audi-q8-1.jpg',
        'imagenes/Audi-Q8/audi-q8-2.jpg',
        'imagenes/Audi-Q8/audi-q8-3.jpg',
        'imagenes/Audi-Q8/audi-q8-4.jpg',
        'imagenes/Audi-Q8/audi-q8-5.jpg'
    ]
};

// Datos detallados de vehículos
const vehicleData = {
    'mercedes-s-class': {
        name: 'Mercedes-Benz S-Class 2024',
        price: 450,
        brand: 'mercedes',
        type: 'sedan',
        images: [
            'imagenes/Mercedes-S-Class/mercedes-s1.jpg',
            'imagenes/Mercedes-S-Class/mercedes-s2.jpg',
            'imagenes/Mercedes-S-Class/mercedes-s3.jpg',
            'imagenes/Mercedes-S-Class/mercedes-s4.jpg',
            'imagenes/Mercedes-S-Class/mercedes-s5.jpg'
        ],
        description: [
            'Motor V8 4.0L Biturbo de 469 HP',
            'Sistema de conducción autónoma nivel 3',
            'Interior de cuero Nappa premium',
            'Sistema de sonido Burmester 3D',
            'Suspensión neumática AIRMATIC',
            'Asientos con masaje y climatización',
            'Pantallas OLED de 12.8 pulgadas',
            'Iluminación ambiental de 64 colores'
        ],
        specs: {
            'Asientos': '7 pasajeros',
            'Motor': 'V8 4.0L Biturbo',
            'Potencia': '469 HP',
            'Transmisión': 'Automática 9G-TRONIC',
            'Tracción': 'AWD 4MATIC',
            'Consumo': '11.2L/100km',
            'Velocidad máxima': '250 km/h',
            '0-100 km/h': '4.4 segundos'
        }
    },
    'bmw-x7': {
        name: 'BMW X7 M50i 2024',
        price: 420,
        brand: 'bmw',
        type: 'suv',
        images: [
            'imagenes/BMW-X7/bmw-x7-1.jpg',
            'imagenes/BMW-X7/bmw-x7-2.jpg',
            'imagenes/BMW-X7/bmw-x7-3.jpg',
            'imagenes/BMW-X7/bmw-x7-4.jpg',
            'imagenes/BMW-X7/bmw-x7-5.jpg'
        ],
        description: [
            'Motor V8 4.4L TwinPower Turbo de 523 HP',
            'Techo panorámico Sky Lounge LED',
            'Sistema iDrive 8 con pantalla curva',
            'Asientos Captain\'s Chair en segunda fila',
            'Sistema de sonido Bowers & Wilkins',
            'Suspensión neumática adaptativa',
            'Paquete M Sport completo',
            'Asistente de estacionamiento automático'
        ],
        specs: {
            'Asientos': '7 pasajeros',
            'Motor': 'V8 4.4L TwinPower',
            'Potencia': '523 HP',
            'Transmisión': 'Automática 8 velocidades',
            'Tracción': 'xDrive AWD',
            'Consumo': '12.1L/100km',
            'Velocidad máxima': '250 km/h',
            '0-100 km/h': '4.7 segundos'
        }
    },
    'audi-a8': {
        name: 'Audi A8 L 2024',
        price: 400,
        brand: 'audi',
        type: 'sedan',
        images: [
            'imagenes/Audi-A8/audi-a8-1.jpg',
            'imagenes/Audi-A8/audi-a8-2.jpg',
            'imagenes/Audi-A8/audi-a8-3.jpg',
            'imagenes/Audi-A8/audi-a8-4.jpg',
            'imagenes/Audi-A8/audi-a8-5.jpg'
        ],
        description: [
            'Motor V6 3.0L TFSI de 340 HP',
            'Tecnología mild-hybrid de 48V',
            'Sistema quattro ultra AWD',
            'Suspensión neumática adaptativa',
            'Interior de cuero Valcona',
            'Sistema MMI touch response',
            'Asientos traseros con masaje',
            'Iluminación Matrix LED'
        ],
        specs: {
            'Asientos': '5 pasajeros',
            'Motor': 'V6 3.0L TFSI',
            'Potencia': '340 HP',
            'Transmisión': 'Tiptronic 8 velocidades',
            'Tracción': 'quattro ultra AWD',
            'Consumo': '8.9L/100km',
            'Velocidad máxima': '250 km/h',
            '0-100 km/h': '5.7 segundos'
        }
    },
    'porsche-cayenne': {
        name: 'Porsche Cayenne Turbo 2024',
        price: 480,
        brand: 'porsche',
        type: 'suv',
        images: [
            'imagenes/Porsche-Cayenne/porsche-cayenne-1.jpg',
            'imagenes/Porsche-Cayenne/porsche-cayenne-2.jpg',
            'imagenes/Porsche-Cayenne/porsche-cayenne-3.jpg',
            'imagenes/Porsche-Cayenne/porsche-cayenne-4.jpg',
            'imagenes/Porsche-Cayenne/porsche-cayenne-5.jpg'
        ],
        description: [
            'Motor V8 4.0L Biturbo de 541 HP',
            'Aceleración 0-100 km/h en 3.9 segundos',
            'Sistema Porsche Active Suspension',
            'Frenos cerámicos PCCB',
            'Interior deportivo de cuero',
            'Sistema PCM con Apple CarPlay',
            'Modo Sport Chrono Package',
            'Escape deportivo con sonido activo'
        ],
        specs: {
            'Asientos': '5 pasajeros',
            'Motor': 'V8 4.0L Biturbo',
            'Potencia': '541 HP',
            'Transmisión': 'Tiptronic S 8 velocidades',
            'Tracción': 'AWD',
            'Consumo': '11.9L/100km',
            'Velocidad máxima': '286 km/h',
            '0-100 km/h': '3.9 segundos'
        }
    },
    'bentley-continental': {
        name: 'Bentley Continental GT 2024',
        price: 650,
        brand: 'bentley',
        type: 'coupe',
        images: [
            'imagenes/Bentley-Continental/bentley-continental-1.jpg',
            'imagenes/Bentley-Continental/bentley-continental-2.jpg',
            'imagenes/Bentley-Continental/bentley-continental-3.jpg',
            'imagenes/Bentley-Continental/bentley-continental-4.jpg',
            'imagenes/Bentley-Continental/bentley-continental-5.jpg'
        ],
        description: [
            'Motor W12 6.0L TSI de 626 HP',
            'Acabados Mulliner exclusivos',
            'Interior de cuero artesanal',
            'Sistema de sonido Naim premium',
            'Suspensión neumática de tres cámaras',
            'Pantalla táctil rotatoria de 12.3"',
            'Asientos con 20 ajustes eléctricos',
            'Detalles en madera de nogal'
        ],
        specs: {
            'Asientos': '4 pasajeros',
            'Motor': 'W12 6.0L TSI',
            'Potencia': '626 HP',
            'Transmisión': 'Automática 8 velocidades',
            'Tracción': 'AWD',
            'Consumo': '14.1L/100km',
            'Velocidad máxima': '333 km/h',
            '0-100 km/h': '3.7 segundos'
        }
    },
    'range-rover': {
        name: 'Range Rover Autobiography 2024',
        price: 380,
        brand: 'range-rover',
        type: 'suv',
        images: [
            'imagenes/Range-Rover/range-rover-1.jpg',
            'imagenes/Range-Rover/range-rover-2.jpg',
            'imagenes/Range-Rover/range-rover-3.jpg',
            'imagenes/Range-Rover/range-rover-4.jpg',
            'imagenes/Range-Rover/range-rover-5.jpg'
        ],
        description: [
            'Motor V8 5.0L Supercharged de 518 HP',
            'Capacidades off-road excepcionales',
            'Sistema Terrain Response 2',
            'Interior Autobiography premium',
            'Suspensión neumática adaptativa',
            'Sistema Pivi Pro infotainment',
            'Asientos Executive Class traseros',
            'Techo panorámico deslizable'
        ],
        specs: {
            'Asientos': '5 pasajeros',
            'Motor': 'V8 5.0L Supercharged',
            'Potencia': '518 HP',
            'Transmisión': 'Automática 8 velocidades',
            'Tracción': 'AWD permanente',
            'Consumo': '13.1L/100km',
            'Velocidad máxima': '225 km/h',
            '0-100 km/h': '5.4 segundos'
        }
    },
    'mercedes-g63': {
        name: 'Mercedes-AMG G63 2024',
        price: 520,
        brand: 'mercedes',
        type: 'suv',
        images: [
            'imagenes/Mercedes-G63/mercedes-g63-1.jpg',
            'imagenes/Mercedes-G63/mercedes-g63-2.jpg',
            'imagenes/Mercedes-G63/mercedes-g63-3.jpg',
            'imagenes/Mercedes-G63/mercedes-g63-4.jpg',
            'imagenes/Mercedes-G63/mercedes-g63-5.jpg'
        ],
        description: [
            'Motor V8 4.0L AMG Biturbo de 577 HP',
            'Tres bloqueos diferenciales',
            'Diseño icónico G-Class',
            'Interior AMG Performance',
            'Sistema MBUX con comando de voz',
            'Suspensión independiente AMG',
            'Frenos AMG de alto rendimiento',
            'Escape AMG Performance'
        ],
        specs: {
            'Asientos': '5 pasajeros',
            'Motor': 'V8 4.0L AMG Biturbo',
            'Potencia': '577 HP',
            'Transmisión': 'AMG SPEEDSHIFT TCT 9G',
            'Tracción': 'AWD permanente',
            'Consumo': '13.8L/100km',
            'Velocidad máxima': '220 km/h',
            '0-100 km/h': '4.5 segundos'
        }
    },
    'audi-q8': {
        name: 'Audi Q8 55 TFSI 2024',
        price: 360,
        brand: 'audi',
        type: 'suv',
        images: [
            'imagenes/Audi-Q8/audi-q8-1.jpg',
            'imagenes/Audi-Q8/audi-q8-2.jpg',
            'imagenes/Audi-Q8/audi-q8-3.jpg',
            'imagenes/Audi-Q8/audi-q8-4.jpg',
            'imagenes/Audi-Q8/audi-q8-5.jpg'
        ],
        description: [
            'Motor V6 3.0L TFSI de 340 HP',
            'Sistema mild-hybrid de 48V',
            'Diseño coupé deportivo',
            'Tecnología quattro ultra',
            'Suspensión neumática adaptativa',
            'Virtual Cockpit plus',
            'Asientos deportivos S line',
            'Faros Matrix LED HD'
        ],
        specs: {
            'Asientos': '5 pasajeros',
            'Motor': 'V6 3.0L TFSI',
            'Potencia': '340 HP',
            'Transmisión': 'Tiptronic 8 velocidades',
            'Tracción': 'quattro ultra AWD',
            'Consumo': '9.1L/100km',
            'Velocidad máxima': '250 km/h',
            '0-100 km/h': '5.9 segundos'
        }
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeNavbarScroll();
    initializeSmoothScrolling();
    setMinDates();
    addReserveButtonsToVehicleCards();
    initializeVehicleFilters();
    animateOnScroll();
});

// Agregar botones de reservar a todas las tarjetas de vehículos
function addReserveButtonsToVehicleCards() {
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    
    vehicleCards.forEach((card, index) => {
        const vehicleInfo = card.querySelector('.vehicle-info');
        const viewDetailsBtn = card.querySelector('.btn-view-details');
        
        if (vehicleInfo && viewDetailsBtn && !vehicleInfo.querySelector('.vehicle-actions')) {
            // Extraer el ID del vehículo del botón "Ver Detalles"
            const onclickAttr = viewDetailsBtn.getAttribute('onclick');
            const vehicleId = onclickAttr.match(/'([^']+)'/)[1];
            
            // Crear el contenedor de acciones
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'vehicle-actions mt-3';
            
            // Crear el botón de reservar que abre el modal independiente
            const reserveBtn = document.createElement('button');
            reserveBtn.className = 'btn btn-reserve w-100';
            reserveBtn.onclick = () => showIndependentReservationModal(vehicleId);
            reserveBtn.innerHTML = '<i class="fas fa-calendar-plus me-2"></i>Reservar Ahora';
            
            actionsDiv.appendChild(reserveBtn);
            vehicleInfo.appendChild(actionsDiv);
        }
    });
}

// Sistema de filtros de vehículos
function initializeVehicleFilters() {
    const filterBrand = document.getElementById('filterBrand');
    const filterType = document.getElementById('filterType');
    const filterPrice = document.getElementById('filterPrice');
    
    if (filterBrand) filterBrand.addEventListener('change', applyFilters);
    if (filterType) filterType.addEventListener('change', applyFilters);
    if (filterPrice) filterPrice.addEventListener('change', applyFilters);
}

// Aplicar filtros a los vehículos
function applyFilters() {
    const brandFilter = document.getElementById('filterBrand')?.value || '';
    const typeFilter = document.getElementById('filterType')?.value || '';
    const priceFilter = document.getElementById('filterPrice')?.value || '';
    
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    
    vehicleCards.forEach(card => {
        const cardParent = card.closest('.col-lg-4, .col-md-6');
        if (!cardParent) return;
        
        // Obtener datos del vehículo desde el botón "Ver Detalles"
        const viewDetailsBtn = card.querySelector('.btn-view-details');
        if (!viewDetailsBtn) return;
        
        const onclickAttr = viewDetailsBtn.getAttribute('onclick');
        const vehicleId = onclickAttr.match(/'([^']+)'/)?.[1];
        const vehicleData_item = vehicleData[vehicleId];
        
        if (!vehicleData_item) return;
        
        let showCard = true;
        
        // Filtro por marca
        if (brandFilter && vehicleData_item.brand !== brandFilter) {
            showCard = false;
        }
        
        // Filtro por tipo
        if (typeFilter && vehicleData_item.type !== typeFilter) {
            showCard = false;
        }
        
        // Filtro por precio
        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
            const vehiclePrice = vehicleData_item.price;
            if (vehiclePrice < minPrice || vehiclePrice > maxPrice) {
                showCard = false;
            }
        }
        
        // Mostrar u ocultar tarjeta con animación
        if (showCard) {
            cardParent.style.display = 'block';
            setTimeout(() => {
                cardParent.style.opacity = '1';
                cardParent.style.transform = 'translateY(0)';
            }, 50);
        } else {
            cardParent.style.opacity = '0';
            cardParent.style.transform = 'translateY(20px)';
            setTimeout(() => {
                cardParent.style.display = 'none';
            }, 300);
        }
    });
    
    // Mostrar mensaje si no hay resultados
    updateNoResultsMessage();
}

// Limpiar todos los filtros
function clearFilters() {
    document.getElementById('filterBrand').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterPrice').value = '';
    applyFilters();
}

// Mostrar mensaje cuando no hay resultados
function updateNoResultsMessage() {
    const vehiclesContainer = document.getElementById('vehiclesContainer');
    const visibleCards = Array.from(vehiclesContainer.children).filter(card => 
        card.style.display !== 'none'
    );
    
    // Remover mensaje anterior si existe
    const existingMessage = document.getElementById('noResultsMessage');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (visibleCards.length === 0) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'noResultsMessage';
        noResultsDiv.className = 'col-12 text-center py-5';
        noResultsDiv.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search fa-3x text-warning mb-3"></i>
                <h4 class="text-white mb-3">No se encontraron vehículos</h4>
                <p class="text-muted mb-4">Intenta ajustar los filtros para encontrar el vehículo perfecto</p>
                <button class="btn btn-outline-gold" onclick="clearFilters()">
                    <i class="fas fa-times me-2"></i>Limpiar Filtros
                </button>
            </div>
        `;
        vehiclesContainer.appendChild(noResultsDiv);
    }
}

// Configurar event listeners
function initializeEventListeners() {
    // Formularios de login y registro
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const contactForm = document.getElementById('contactForm');
    const vehicleReservationForm = document.getElementById('vehicleReservationForm');
    const independentReservationForm = document.getElementById('independentReservationForm');
    const paymentForm = document.getElementById('paymentForm');
    const reserveVehicleBtn = document.getElementById('reserveVehicleBtn');

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (contactForm) contactForm.addEventListener('submit', handleContactForm);
    if (vehicleReservationForm) vehicleReservationForm.addEventListener('submit', handleVehicleReservation);
    if (independentReservationForm) independentReservationForm.addEventListener('submit', handleIndependentReservation);
    if (paymentForm) paymentForm.addEventListener('submit', handlePayment);
    if (reserveVehicleBtn) reserveVehicleBtn.addEventListener('click', showReservationForm);

    // Event listeners para calcular total en tiempo real
    const startDateInput = document.getElementById('reservationFechaInicio');
    const endDateInput = document.getElementById('reservationFechaFin');
    
    if (startDateInput) startDateInput.addEventListener('change', updateReservationSummary);
    if (endDateInput) endDateInput.addEventListener('change', updateReservationSummary);

    // Botón de pagar en carrito
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'pagarCarrito') {
            showPaymentModal();
        }
    });
}

// Efecto de scroll en navbar
function initializeNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll suave para enlaces de navegación
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Establecer fechas mínimas en formularios
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = today;
    });
}

// NUEVA FUNCIÓN: Modal de reserva independiente
function showIndependentReservationModal(vehicleId) {
    const vehicle = vehicleData[vehicleId];
    if (!vehicle) {
        showNotification('Vehículo no encontrado.', 'error');
        return;
    }

    currentVehicle = {
        id: vehicleId,
        name: vehicle.name,
        price: vehicle.price,
        images: vehicle.images,
        description: vehicle.description,
        specs: vehicle.specs
    };

    // Actualizar contenido del modal de reserva independiente
    const reservationVehicleName = document.getElementById('reservationVehicleName');
    const reservationVehiclePrice = document.getElementById('reservationVehiclePrice');
    const reservationVehicleImage = document.getElementById('reservationVehicleImage');
    const reservationModalTitle = document.getElementById('reservationModalTitle');

    if (reservationVehicleName) reservationVehicleName.textContent = vehicle.name;
    if (reservationVehiclePrice) reservationVehiclePrice.textContent = `S/. ${vehicle.price} por día`;
    if (reservationVehicleImage) reservationVehicleImage.src = vehicle.images[0];
    if (reservationModalTitle) reservationModalTitle.textContent = `Reservar ${vehicle.name}`;

    // Limpiar formulario
    const form = document.getElementById('independentReservationForm');
    if (form) form.reset();

    // Resetear resumen
    updateReservationSummary();

    // Mostrar modal con animación suave
    showModalWithSmoothAnimation('reservationModal');
}

// Función para mostrar detalles del vehículo (solo detalles)
function showVehicleDetails(vehicleId) {
    const vehicle = vehicleData[vehicleId];
    if (!vehicle) {
        showNotification('Vehículo no encontrado.', 'error');
        return;
    }

    currentVehicle = {
        id: vehicleId,
        name: vehicle.name,
        price: vehicle.price,
        images: vehicle.images,
        description: vehicle.description,
        specs: vehicle.specs
    };

    // Actualizar contenido del modal
    const vehicleNameEl = document.getElementById('vehicleName');
    const vehiclePriceEl = document.getElementById('vehiclePrice');
    
    if (vehicleNameEl) vehicleNameEl.textContent = vehicle.name;
    if (vehiclePriceEl) vehiclePriceEl.textContent = `S/. ${vehicle.price} por día`;

    // Cargar imágenes del carrusel con animación
    loadVehicleImagesWithAnimation(vehicle.images);

    // Cargar descripción detallada
    loadVehicleDescriptionDetailed(vehicle.description);

    // Cargar especificaciones técnicas
    loadVehicleSpecs(vehicle.specs);

    // Ocultar formulario de reserva y mostrar botón
    const reservationForm = document.getElementById('reservationForm');
    const reserveBtn = document.getElementById('reserveVehicleBtn');
    
    if (reservationForm) reservationForm.style.display = 'none';
    if (reserveBtn) reserveBtn.style.display = 'block';

    // Mostrar modal con animación suave
    showModalWithSmoothAnimation('vehicleModal');
}

// NUEVA FUNCIÓN: Mostrar modal con animación suave y elegante
function showModalWithSmoothAnimation(modalId) {
    const modalElement = document.getElementById(modalId);
    if (!modalElement) return;

    // Limpiar cualquier instancia previa del modal
    const existingModal = bootstrap.Modal.getInstance(modalElement);
    if (existingModal) {
        existingModal.dispose();
    }

    // Crear nueva instancia del modal
    const modal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: true
    });

    // Agregar clase de animación antes de mostrar
    modalElement.classList.add('modal-smooth-enter');
    
    // Remover event listeners previos para evitar duplicados
    modalElement.removeEventListener('shown.bs.modal', handleModalShown);
    modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
    modalElement.removeEventListener('hide.bs.modal', handleModalHide);
    
    // Agregar event listeners
    modalElement.addEventListener('shown.bs.modal', handleModalShown);
    modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
    modalElement.addEventListener('hide.bs.modal', handleModalHide);
    
    // Mostrar modal
    modal.show();
}

// Handlers para eventos del modal
function handleModalShown(event) {
    const modalElement = event.target;
    modalElement.classList.remove('modal-smooth-enter');
    modalElement.classList.add('modal-smooth-show');
    
    // Animar elementos internos
    setTimeout(() => {
        const featureItems = modalElement.querySelectorAll('.feature-item');
        featureItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-in');
            }, index * 100);
        });
        
        const specItems = modalElement.querySelectorAll('.spec-item');
        specItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-in');
            }, index * 100);
        });
    }, 200);
}

function handleModalHide(event) {
    const modalElement = event.target;
    modalElement.classList.remove('modal-smooth-show');
    modalElement.classList.add('modal-smooth-exit');
}

function handleModalHidden(event) {
    const modalElement = event.target;
    modalElement.classList.remove('modal-smooth-exit', 'modal-smooth-enter');
    
    const featureItems = modalElement.querySelectorAll('.feature-item');
    featureItems.forEach(item => item.classList.remove('animate-in'));
    
    const specItems = modalElement.querySelectorAll('.spec-item');
    specItems.forEach(item => item.classList.remove('animate-in'));
}

// Cargar imágenes con validación
function loadVehicleImagesWithAnimation(images) {
    const carouselImages = document.getElementById('vehicleImages');
    if (!carouselImages) return;
    
    carouselImages.innerHTML = '';

    if (!images || images.length === 0) {
        carouselImages.innerHTML = '<div class="carousel-item active"><div class="text-center p-5"><i class="fas fa-car fa-5x text-muted"></i><p class="mt-3 text-muted">Imagen no disponible</p></div></div>';
        return;
    }

    images.forEach((img, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (index === 0) div.classList.add('active');
        
        div.innerHTML = `
            <img src="${img}" 
                 class="d-block w-100 vehicle-detail-image" 
                 alt="Imagen del vehículo ${index + 1}" 
                 style="height: 400px; object-fit: cover; border-radius: 10px;"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';">
        `;
        
        carouselImages.appendChild(div);
    });

    // Reinicializar el carrusel
    const vehicleCarouselModal = document.getElementById('vehicleCarouselModal');
    if (vehicleCarouselModal) {
        const vehicleCarousel = new bootstrap.Carousel(vehicleCarouselModal, {
            interval: 10000,
            wrap: true
        });
    }
}

// Cargar descripción con validación
function loadVehicleDescriptionDetailed(description) {
    const descriptionContainer = document.getElementById('vehicleDescription');
    if (!descriptionContainer) return;
    
    descriptionContainer.innerHTML = '';

    if (!description || description.length === 0) {
        descriptionContainer.innerHTML = '<p class="text-muted">Descripción no disponible</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled', 'vehicle-features-list');

    description.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('feature-item');
        li.style.animationDelay = `${index * 0.1}s`;
        li.innerHTML = `
            <i class="fas fa-check-circle text-warning me-3"></i>
            <span>${item}</span>
        `;
        ul.appendChild(li);
    });

    descriptionContainer.appendChild(ul);
}

// Cargar especificaciones con validación
function loadVehicleSpecs(specs) {
    const specsContainer = document.getElementById('vehicleSpecs');
    if (!specsContainer) return;
    
    specsContainer.innerHTML = '';

    if (!specs || Object.keys(specs).length === 0) {
        specsContainer.innerHTML = '<p class="text-muted">Especificaciones no disponibles</p>';
        return;
    }

    const specsGrid = document.createElement('div');
    specsGrid.classList.add('specs-grid');

    Object.entries(specs).forEach(([key, value], index) => {
        const specItem = document.createElement('div');
        specItem.classList.add('spec-item');
        specItem.style.animationDelay = `${index * 0.1}s`;
        specItem.innerHTML = `
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
        `;
        specsGrid.appendChild(specItem);
    });

    specsContainer.appendChild(specsGrid);
}

// Mostrar formulario de reserva dentro del modal de detalles
function showReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    const reserveBtn = document.getElementById('reserveVehicleBtn');
    
    if (reservationForm) reservationForm.style.display = 'block';
    if (reserveBtn) reserveBtn.style.display = 'none';
}

// Actualizar resumen de reserva en tiempo real
function updateReservationSummary() {
    if (!currentVehicle) return;

    const startDate = document.getElementById('reservationFechaInicio')?.value;
    const endDate = document.getElementById('reservationFechaFin')?.value;
    
    const daysEl = document.getElementById('reservationDays');
    const dailyPriceEl = document.getElementById('reservationDailyPrice');
    const totalEl = document.getElementById('reservationTotal');

    if (!startDate || !endDate || !daysEl || !dailyPriceEl || !totalEl) return;

    if (startDate && endDate) {
        const days = calculateDays(startDate, endDate);
        const dailyPrice = currentVehicle.price;
        const total = days * dailyPrice;

        daysEl.textContent = days > 0 ? days : 0;
        dailyPriceEl.textContent = `S/. ${dailyPrice}`;
        totalEl.textContent = `S/. ${total > 0 ? total : 0}`;
    } else {
        daysEl.textContent = '0';
        dailyPriceEl.textContent = `S/. ${currentVehicle.price}`;
        totalEl.textContent = 'S/. 0';
    }
}

// Manejo de reserva independiente
function handleIndependentReservation(e) {
    e.preventDefault();

    const nombre = document.getElementById('reservationNombre').value;
    const correo = document.getElementById('reservationCorreo').value;
    const telefono = document.getElementById('reservationTelefono').value;
    const fechaInicio = document.getElementById('reservationFechaInicio').value;
    const fechaFin = document.getElementById('reservationFechaFin').value;

    // Validaciones
    if (!validateDates(fechaInicio, fechaFin)) return;
    if (!validateName(nombre)) return;
    if (!validateEmail(correo)) return;
    if (!validatePhone(telefono)) return;

    // Calcular días y precio total
    const dias = calculateDays(fechaInicio, fechaFin);
    const precioTotal = dias * parseInt(currentVehicle.price);

    // Crear reserva
    const reserva = {
        id: Date.now(),
        vehiculo: currentVehicle.name,
        nombre,
        correo,
        telefono,
        fechaInicio,
        fechaFin,
        dias,
        precioUnitario: parseInt(currentVehicle.price),
        precioTotal
    };

    // Agregar al carrito
    reservas.push(reserva);
    updateCart();

    // Cerrar modal
    const reservationModal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
    if (reservationModal) reservationModal.hide();

    // Limpiar formulario
    document.getElementById('independentReservationForm').reset();

    showNotification('Reserva agregada al carrito exitosamente.', 'success');
}

// Manejo de login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Buscar usuario en localStorage
    const userData = localStorage.getItem(email);
    if (userData) {
        const user = JSON.parse(userData);
        if (user.password === password) {
            showNotification('Inicio de sesión exitoso. ¡Bienvenido, ' + user.name + '!', 'success');
            document.getElementById('loginForm').reset();
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            if (loginModal) loginModal.hide();
            
            // Actualizar UI para usuario logueado
            updateUIForLoggedUser(user);
        } else {
            showNotification('Contraseña incorrecta.', 'error');
        }
    } else {
        showNotification('Usuario no encontrado. ¿Necesitas registrarte?', 'error');
    }
}

// Manejo de registro
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const terms = document.getElementById('registerTerms').checked;

    // Validaciones
    if (!validateName(name)) return;
    if (!validateEmail(email)) return;
    if (!validatePhone(phone)) return;
    
    if (password.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Las contraseñas no coinciden.', 'error');
        return;
    }
    
    if (!terms) {
        showNotification('Debes aceptar los términos y condiciones.', 'error');
        return;
    }

    // Verificar si el usuario ya existe
    if (localStorage.getItem(email)) {
        showNotification('Este correo electrónico ya está registrado.', 'error');
        return;
    }

    // Crear nuevo usuario
    const userData = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        registrationDate: new Date().toISOString()
    };

    // Guardar en localStorage
    localStorage.setItem(email, JSON.stringify(userData));
    
    showNotification('Registro exitoso. ¡Bienvenido a Luxury Drive!', 'success');
    document.getElementById('registerForm').reset();
    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    if (registerModal) registerModal.hide();
    
    // Auto-login después del registro
    updateUIForLoggedUser(userData);
}

// Función para cambiar entre modales
function switchToLogin() {
    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    if (registerModal) registerModal.hide();
    setTimeout(() => {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    }, 300);
}

// Actualizar UI para usuario logueado
function updateUIForLoggedUser(user) {
    // Cambiar botones de login/registro por menú de usuario
    const navbarActions = document.querySelector('.navbar-actions');
    const loginBtn = navbarActions?.querySelector('[data-bs-target="#loginModal"]');
    const registerBtn = navbarActions?.querySelector('[data-bs-target="#registerModal"]');
    
    if (loginBtn && registerBtn) {
        const userMenu = document.createElement('div');
        userMenu.className = 'dropdown';
        userMenu.innerHTML = `
            <button class="btn btn-outline-gold dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i class="fas fa-user me-2"></i>${user.name}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Mi Perfil</a></li>
                <li><a class="dropdown-item" href="#"><i class="fas fa-history me-2"></i>Mis Reservas</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Cerrar Sesión</a></li>
            </ul>
        `;
        
        loginBtn.replaceWith(userMenu);
        registerBtn.remove();
    }
}

// Función de logout
function logout() {
    showNotification('Sesión cerrada exitosamente.', 'info');
    location.reload();
}

// Manejo de reserva de vehículo (modal de detalles)
function handleVehicleReservation(e) {
    e.preventDefault();

    const nombre = document.getElementById('reserveNombre').value;
    const correo = document.getElementById('reserveCorreo').value;
    const telefono = document.getElementById('reserveTelefono').value;
    const fechaInicio = document.getElementById('reserveFechaInicio').value;
    const fechaFin = document.getElementById('reserveFechaFin').value;

    // Validaciones
    if (!validateDates(fechaInicio, fechaFin)) return;
    if (!validateName(nombre)) return;
    if (!validateEmail(correo)) return;
    if (!validatePhone(telefono)) return;

    // Calcular días y precio total
    const dias = calculateDays(fechaInicio, fechaFin);
    const precioTotal = dias * parseInt(currentVehicle.price);

    // Crear reserva
    const reserva = {
        id: Date.now(),
        vehiculo: currentVehicle.name,
        nombre,
        correo,
        telefono,
        fechaInicio,
        fechaFin,
        dias,
        precioUnitario: parseInt(currentVehicle.price),
        precioTotal
    };

    // Agregar al carrito
    reservas.push(reserva);
    updateCart();

    // Cerrar modal
    const vehicleModal = bootstrap.Modal.getInstance(document.getElementById('vehicleModal'));
    if (vehicleModal) vehicleModal.hide();

    // Limpiar formulario
    document.getElementById('vehicleReservationForm').reset();

    showNotification('Reserva agregada al carrito exitosamente.', 'success');
}

// Manejo del formulario de contacto
function handleContactForm(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validaciones
    if (!validateName(nombre)) return;
    if (!validateEmail(correo)) return;
    if (!validatePhone(telefono)) return;

    if (mensaje.trim().length < 10) {
        showNotification('El mensaje debe tener al menos 10 caracteres.', 'error');
        return;
    }

    // Simular envío del formulario
    showNotification('Mensaje enviado exitosamente. Te contactaremos pronto.', 'success');
    document.getElementById('contactForm').reset();
}

// Manejo del pago
function handlePayment(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value;

    // Validaciones básicas
    if (!validateCardNumber(cardNumber)) return;
    if (!validateExpirationDate(expirationDate)) return;
    if (!validateCVV(cvv)) return;
    if (!validateName(cardName)) return;

    // Simular procesamiento del pago
    showNotification('Pago procesado exitosamente. ¡Gracias por tu reserva!', 'success');
    
    // Limpiar carrito
    reservas = [];
    updateCart();
    
    // Cerrar modal
    const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
    if (paymentModal) paymentModal.hide();
    
    // Limpiar formulario
    document.getElementById('paymentForm').reset();
}

// Mostrar modal de pago
function showPaymentModal() {
    if (reservas.length === 0) {
        showNotification('No hay reservas en el carrito.', 'error');
        return;
    }

    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
}

// Actualizar carrito
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cartCount) cartCount.textContent = reservas.length;

    if (cartItems) {
        if (reservas.length === 0) {
            cartItems.innerHTML = 'No hay reservas';
        } else {
            cartItems.innerHTML = reservas.map(reserva => 
                `${reserva.vehiculo} - ${reserva.dias} día(s) - S/. ${reserva.precioTotal}`
            ).join('<br>');
        }
    }

    if (cartTotal) {
        const total = reservas.reduce((sum, reserva) => sum + reserva.precioTotal, 0);
        cartTotal.textContent = total;
    }

    // Agregar botón de pagar si hay reservas
    const cartDropdown = document.querySelector('.dropdown-menu');
    const existingPayButton = document.getElementById('pagarCarrito');
    
    if (reservas.length > 0 && !existingPayButton && cartDropdown) {
        const payButton = document.createElement('li');
        payButton.innerHTML = '<button class="btn btn-gold w-100 mt-2" id="pagarCarrito">Proceder al Pago</button>';
        cartDropdown.appendChild(payButton);
    } else if (reservas.length === 0 && existingPayButton) {
        existingPayButton.parentElement.remove();
    }
}

// Funciones de validación
function validateName(name) {
    if (name.trim().length < 2) {
        showNotification('El nombre debe tener al menos 2 caracteres.', 'error');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Por favor, ingresa un correo electrónico válido.', 'error');
        return false;
    }
    return true;
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
    if (!phoneRegex.test(phone)) {
        showNotification('Por favor, ingresa un número de teléfono válido.', 'error');
        return false;
    }
    return true;
}

function validateDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
        showNotification('La fecha de inicio no puede ser anterior a hoy.', 'error');
        return false;
    }

    if (end <= start) {
        showNotification('La fecha de fin debe ser posterior a la fecha de inicio.', 'error');
        return false;
    }

    return true;
}

function validateCardNumber(cardNumber) {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (cleanNumber.length < 13 || cleanNumber.length > 19) {
        showNotification('Número de tarjeta inválido.', 'error');
        return false;
    }
    return true;
}

function validateExpirationDate(date) {
    const dateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!dateRegex.test(date)) {
        showNotification('Fecha de expiración inválida. Usa el formato MM/AA.', 'error');
        return false;
    }
    return true;
}

function validateCVV(cvv) {
    if (cvv.length < 3 || cvv.length > 4) {
        showNotification('CVV inválido.', 'error');
        return false;
    }
    return true;
}

// Calcular días entre fechas
function calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(notification);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}



// ===== FUNCIONALIDAD DE RESEÑAS =====

// Variables para el sistema de reseñas
let currentRating = 5;
let reviewFormVisible = false;

// Inicializar funcionalidad de reseñas
function initializeReviewsSection() {
    const btnAbrirReseñas = document.getElementById('btnAbrirReseñas');
    const btnCerrarReseñas = document.getElementById('btnCerrarReseñas');
    const btnCerrarExito = document.getElementById('btnCerrarExito');
    const reviewForm = document.getElementById('reviewForm');
    const ratingStars = document.querySelectorAll('#ratingStars i');

    // Event listeners
    if (btnAbrirReseñas) {
        btnAbrirReseñas.addEventListener('click', abrirFormularioReseñas);
    }
    
    if (btnCerrarReseñas) {
        btnCerrarReseñas.addEventListener('click', cerrarFormularioReseñas);
    }
    
    if (btnCerrarExito) {
        btnCerrarExito.addEventListener('click', cerrarMensajeExito);
    }
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', procesarEnvioReseña);
    }
    
    // Inicializar sistema de calificación
    initializeRatingSystem();
}

// Abrir formulario de reseñas con animación elegante
function abrirFormularioReseñas() {
    const formularioContainer = document.getElementById('formularioReseñas');
    const reviewForm = document.querySelector('.review-form');
    const btnAbrir = document.getElementById('btnAbrirReseñas');
    
    if (!formularioContainer || reviewFormVisible) return;
    
    // Animación del botón
    btnAbrir.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnAbrir.style.transform = 'scale(1)';
    }, 150);
    
    // Mostrar formulario
    formularioContainer.style.display = 'block';
    
    // Trigger reflow para asegurar que la transición funcione
    formularioContainer.offsetHeight;
    
    // Añadir clase para animación
    setTimeout(() => {
        formularioContainer.classList.add('show');
        if (reviewForm) {
            reviewForm.classList.add('animate-in');
        }
    }, 50);
    
    // Scroll suave hacia el formulario
    setTimeout(() => {
        formularioContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 300);
    
    reviewFormVisible = true;
    
    // Ocultar botón de abrir
    setTimeout(() => {
        btnAbrir.style.opacity = '0.3';
        btnAbrir.style.pointerEvents = 'none';
    }, 200);
}

// Cerrar formulario de reseñas
function cerrarFormularioReseñas() {
    const formularioContainer = document.getElementById('formularioReseñas');
    const reviewForm = document.querySelector('.review-form');
    const btnAbrir = document.getElementById('btnAbrirReseñas');
    
    if (!formularioContainer || !reviewFormVisible) return;
    
    // Remover clases de animación
    formularioContainer.classList.remove('show');
    if (reviewForm) {
        reviewForm.classList.remove('animate-in');
    }
    
    // Ocultar después de la animación
    setTimeout(() => {
        formularioContainer.style.display = 'none';
        resetearFormularioReseñas();
    }, 500);
    
    reviewFormVisible = false;
    
    // Mostrar botón de abrir
    btnAbrir.style.opacity = '1';
    btnAbrir.style.pointerEvents = 'auto';
    
    // Scroll suave hacia el botón
    setTimeout(() => {
        btnAbrir.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 200);
}

// Inicializar sistema de calificación con estrellas
function initializeRatingSystem() {
    const ratingStars = document.querySelectorAll('#ratingStars i');
    const ratingInput = document.getElementById('reviewRating');
    
    if (!ratingStars.length) return;
    
    ratingStars.forEach((star, index) => {
        const rating = index + 1;
        
        // Limpiar estilos previos
        star.style.transform = '';
        star.style.transition = '';
        
        // Hover effect
        star.onmouseenter = function() {
            highlightStars(rating);
        };
        
        // Click effect
        star.onclick = function(e) {
            e.preventDefault();
            setRating(rating);
            
            // Animación simple
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.15s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        };
        
        // Cursor pointer
        star.style.cursor = 'pointer';
    });
    
    // Restaurar calificación al salir del área
    const ratingContainer = document.getElementById('ratingStars');
    if (ratingContainer) {
        ratingContainer.onmouseleave = function() {
            highlightStars(currentRating);
        };
    }
    
    // Establecer calificación inicial
    setRating(5);
}

// Resaltar estrellas hasta el rating especificado
function highlightStars(rating) {
    const ratingStars = document.querySelectorAll('#ratingStars i');
    
    ratingStars.forEach((star, index) => {
        star.classList.remove('active');
        if (index < rating) {
            star.classList.add('active');
        }
    });
}

// Establecer calificación
function setRating(rating) {
    currentRating = rating;
    const ratingInput = document.getElementById('reviewRating');
    
    if (ratingInput) {
        ratingInput.value = rating;
    }
    
    highlightStars(rating);
    
    // Mostrar feedback visual
    console.log('Calificación seleccionada:', rating, 'estrellas');
}

// Procesar envío de reseña
function procesarEnvioReseña(event) {
    event.preventDefault();
    
    const formData = {
        nombre: document.getElementById('reviewName').value,
        email: document.getElementById('reviewEmail').value,
        vehiculo: document.getElementById('reviewVehicle').value,
        calificacion: currentRating,
        mensaje: document.getElementById('reviewMessage').value
    };
    
    // Validar datos
    if (!validarDatosReseña(formData)) {
        return;
    }
    
    // Animación de envío
    const submitBtn = document.querySelector('.btn-submit-review');
    const originalText = submitBtn.innerHTML;
    
    // Cambiar botón a estado de carga
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Simular envío (en una aplicación real, aquí iría la llamada al servidor)
    setTimeout(() => {
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        
        // Mostrar mensaje de éxito
        mostrarMensajeExito(formData);
        
        // Cerrar formulario después de un momento
        setTimeout(() => {
            cerrarFormularioReseñas();
        }, 1000);
        
    }, 2000);
}

// Validar datos de la reseña
function validarDatosReseña(data) {
    if (!data.nombre.trim()) {
        mostrarErrorCampo('reviewName', 'Por favor ingresa tu nombre completo');
        return false;
    }
    
    if (!data.email.trim() || !validarEmail(data.email)) {
        mostrarErrorCampo('reviewEmail', 'Por favor ingresa un email válido');
        return false;
    }
    
    if (!data.vehiculo) {
        mostrarErrorCampo('reviewVehicle', 'Por favor selecciona el vehículo');
        return false;
    }
    
    if (!data.mensaje.trim() || data.mensaje.trim().length < 10) {
        mostrarErrorCampo('reviewMessage', 'Por favor describe tu experiencia (mínimo 10 caracteres)');
        return false;
    }
    
    return true;
}

// Mostrar error en campo específico
function mostrarErrorCampo(fieldId, mensaje) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Remover error anterior si existe
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Crear mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff6b6b';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.style.opacity = '0';
    errorDiv.style.transform = 'translateY(-10px)';
    errorDiv.style.transition = 'all 0.3s ease';
    errorDiv.textContent = mensaje;
    
    // Añadir después del campo
    field.parentNode.appendChild(errorDiv);
    
    // Animar entrada
    setTimeout(() => {
        errorDiv.style.opacity = '1';
        errorDiv.style.transform = 'translateY(0)';
    }, 50);
    
    // Resaltar campo
    field.style.borderColor = '#ff6b6b';
    field.style.boxShadow = '0 0 0 0.2rem rgba(255, 107, 107, 0.25)';
    
    // Remover resaltado al enfocar
    field.addEventListener('focus', function removeError() {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        if (errorDiv && errorDiv.parentNode) {
            errorDiv.style.opacity = '0';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.remove();
                }
            }, 300);
        }
        field.removeEventListener('focus', removeError);
    });
    
    // Scroll al campo con error
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    field.focus();
}

// Validar formato de email
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar mensaje de éxito elegante
function mostrarMensajeExito(formData) {
    const successMessage = document.getElementById('reviewSuccessMessage');
    const formularioContainer = document.getElementById('formularioReseñas');
    
    if (!successMessage) return;
    
    // Ocultar formulario primero
    formularioContainer.classList.remove('show');
    
    setTimeout(() => {
        formularioContainer.style.display = 'none';
        
        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';
        
        // Trigger reflow
        successMessage.offsetHeight;
        
        // Añadir clase para animación
        setTimeout(() => {
            successMessage.classList.add('show');
            
            // Scroll hacia el mensaje
            setTimeout(() => {
                successMessage.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300);
        }, 50);
        
    }, 500);
    
    // Personalizar mensaje con datos del usuario
    personalizarMensajeExito(formData);
}

// Personalizar mensaje de éxito con datos del usuario
function personalizarMensajeExito(formData) {
    const successContent = document.querySelector('.success-content');
    if (!successContent) return;
    
    // Obtener nombre del vehículo
    const vehicleSelect = document.getElementById('reviewVehicle');
    const vehicleName = vehicleSelect.options[vehicleSelect.selectedIndex].text;
    
    // Actualizar contenido
    const mainMessage = successContent.querySelector('p');
    if (mainMessage) {
        mainMessage.innerHTML = `
            Estimado/a <strong style="color: var(--primary-gold);">${formData.nombre}</strong>, 
            agradecemos profundamente que hayas tomado el tiempo para compartir tu experiencia con el 
            <strong style="color: var(--primary-gold);">${vehicleName}</strong>. 
            Tu testimonio es invaluable para mantener nuestros estándares de excelencia.
        `;
    }
}

// Cerrar mensaje de éxito
function cerrarMensajeExito() {
    const successMessage = document.getElementById('reviewSuccessMessage');
    const btnAbrir = document.getElementById('btnAbrirReseñas');
    
    if (!successMessage) return;
    
    // Animar salida
    successMessage.classList.remove('show');
    
    setTimeout(() => {
        successMessage.style.display = 'none';
        resetearFormularioReseñas();
    }, 600);
    
    // Mostrar botón de abrir
    btnAbrir.style.opacity = '1';
    btnAbrir.style.pointerEvents = 'auto';
    
    // Scroll hacia el botón
    setTimeout(() => {
        btnAbrir.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 300);
}

// Resetear formulario de reseñas
function resetearFormularioReseñas() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.reset();
    }
    
    // Resetear calificación
    setRating(5);
    
    // Remover clases de animación
    const formContainer = document.querySelector('.review-form');
    if (formContainer) {
        formContainer.classList.remove('animate-in');
    }
    
    // Limpiar errores
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    reviewFormVisible = false;
}

// Añadir a la inicialización principal
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    initializeReviewsSection();
});

