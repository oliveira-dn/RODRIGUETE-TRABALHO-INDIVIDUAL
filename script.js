// Função para iniciar as partículas no background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00a9e0"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    size: {
      value: 5,
      random: true
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

// Função para ocultar a tela inicial e mostrar o conteúdo
window.onload = function() {
  setTimeout(function() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
  }, 3000); // 3 segundos para a animação
};
