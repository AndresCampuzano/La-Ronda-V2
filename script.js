/* ============================================================
   1) MENÚ HAMBURGUESA  (solo se usa en celular)
   ============================================================ */
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.classList.toggle('open');   // anima las rayitas → X
});

// cerrar el menú al hacer clic en un link (en celular)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
    });
});


/* ============================================================
   2) ANIMACIONES AL HACER SCROLL
   Los elementos aparecen (fade + sube) cuando entran en pantalla.
   ============================================================ */

// avisa al CSS que JS está activo (así ocultamos antes de animar)
document.documentElement.classList.add('js');

// "vigía" que detecta cuándo un elemento entra en la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');   // ← dispara la animación
            observer.unobserve(entry.target);    // anima una sola vez
        }
    });
}, { threshold: 0.12 });

// marca los elementos que queremos animar y, opcional, los escalona
function animate(selector, stagger) {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        if (stagger) el.style.transitionDelay = (i * 90) + 'ms';  // efecto cascada
        observer.observe(el);
    });
}

animate('.section-head');
animate('.two-col');
animate('.note');
animate('.confirm');
animate('.order-form');
animate('.shipping');
animate('.card', true);   // las 4 tarjetas aparecen en cascada
animate('.step', true);   // los 5 pasos también


/* ============================================================
   3) NAV QUE SE ACHICA AL BAJAR
   ============================================================ */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});
