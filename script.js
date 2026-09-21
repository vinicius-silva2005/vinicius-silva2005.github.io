// =============================
// GALERIA
// =============================
const fotos = document.querySelectorAll(".foto img");
const tela = document.createElement("div");
tela.classList.add("tela-foto");
const imagemGrande = document.createElement("img");
const fechar = document.createElement("span");
fechar.innerHTML = "&times;";
tela.appendChild(fechar);
tela.appendChild(imagemGrande);
document.body.appendChild(tela);
fotos.forEach(function (foto) {
    foto.addEventListener("click", function () {
        imagemGrande.src = foto.src;
        tela.classList.add("ativa");
    });
});
fechar.addEventListener("click", function () {
    tela.classList.remove("ativa");
});
tela.addEventListener("click", function (evento) {
    if (evento.target === tela) {
        tela.classList.remove("ativa");
    }
});
// =============================
// ANIMAÇÕES AO ROLAR
// =============================
const elementos = document.querySelectorAll(
    ".card, .foto, .sobre-texto, .destaque, .contato"
);
elementos.forEach(function (elemento) {
    elemento.classList.add("animar");
});
const observador = new IntersectionObserver(function (elementos) {
    elementos.forEach(function (elemento) {
        if (elemento.isIntersecting) {
            elemento.target.classList.add("visivel");
        }
    });
}, {
    threshold: 0.15
});
document.querySelectorAll(".animar").forEach(function (elemento) {
    observador.observe(elemento);
});
console.log("SITE BARBEARIA NAVALHANDO FUNCIONANDO!");