// Alternar entre o modo claro e escuro
const modoBtn = document.getElementById('modo-btn');
modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    modoBtn.textContent = document.body.classList.contains('light') ? 'Modo Escuro' : 'Modo Claro';
});

// Animação de Boot
window.addEventListener('load', () => {
    const boot = document.getElementById('boot');
    setTimeout(() => {
        boot.style.display = 'none'; // Esconde a animação após o carregamento
    }, 5000); // Duração total da animação (boot + fadeOut)
});

// Navegação entre as seções
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        const sectionId = e.target.getAttribute('href').substring(1);
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});
