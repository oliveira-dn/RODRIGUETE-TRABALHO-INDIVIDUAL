// Sons
const navSound = new Audio("assets/nav.mp3");
const selectSound = new Audio("assets/select.mp3");

// Para botões de menu
document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => navSound.play());
    btn.addEventListener("click", () => selectSound.play());
});
