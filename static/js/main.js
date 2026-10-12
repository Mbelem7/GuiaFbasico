// ===== Imágenes opcionales =====
// Si falta una imagen marcada con data-opcional (logo UNI, ícono Microsoft), se oculta.
document.querySelectorAll('img[data-opcional]').forEach(img => {
    const ocultar = () => {
        const li = img.closest('.iconos li');
        (li || img).style.display = 'none';
    };
    if (img.complete && img.naturalWidth === 0) ocultar();
    img.addEventListener('error', ocultar);
});

// ===== Menú activo =====
const enlaces = document.querySelectorAll('nav a');
const secciones = [...enlaces].map(a => document.querySelector(a.getAttribute('href')));
const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
        if (e.isIntersecting) {
            enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
secciones.forEach(s => s && observador.observe(s));