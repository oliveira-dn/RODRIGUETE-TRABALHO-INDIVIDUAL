// ====== BOOT ======
window.addEventListener("load", () => {
  const boot = document.getElementById("boot");
  const site = document.getElementById("site");

  // Mostra o site após a animação de boot
  setTimeout(() => {
    boot.style.display = "none";
    site.classList.remove("oculto");
  }, 5500);
});

// ====== NAVEGAÇÃO ======
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const somClique = document.getElementById("somClique");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    somClique.play();

    links.forEach(l => l.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    link.classList.add("active");
    const target = link.getAttribute("data-section");
    document.getElementById(target).classList.add("active");
  });
});

// ====== MODO ESCURO/CLARO ======
const modoBtn = document.getElementById("modo-btn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  somClique.play();
  modoBtn.textContent = document.body.classList.contains("light") ? "🌑 Modo Escuro" : "🌙 Modo Claro";
});

// ====== FORMULÁRIO ======
const form = document.getElementById("form-contato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const msg = document.getElementById("mensagem").value.trim();
  if (nome && msg) {
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. 🎮`;
    somClique.play();
    form.reset();
  } else {
    resposta.textContent = "Por favor, preencha todos os campos.";
  }
});

// ====== CARROSSEL DE JOGOS ======
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let index = 0;

function showSlide(i) {
  slides.forEach((s, n) => {
    s.classList.toggle("ativo", n === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener("click", () => { somClique.play(); nextSlide(); });
prev.addEventListener("click", () => { somClique.play(); prevSlide(); });

// Auto-avança a cada 4s
setInterval(nextSlide, 4000);
