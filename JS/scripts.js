
const elements = document.querySelectorAll("section, .card");

// ANIMACIÓN SCROLL
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // mejora rendimiento
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// NAVBAR SCROLL (más seguro)
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");

    if (!nav) return; // evita errores

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(){
    alert("¡Gracias por completar el formulario!");
});
const nombre = document.getElementById("nombre");

if(nombre.value === ""){
    alert("Debe ingresar su nombre");
}
document.getElementById("mensaje").innerHTML =
"<div class='alert alert-success'>Consulta enviada correctamente.</div>";
document.getElementById("mensaje").innerHTML =
"<div class='alert alert-success'>¡Gracias por tu opinión!</div>";