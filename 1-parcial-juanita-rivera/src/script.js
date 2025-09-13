const comenzarBtn = document.getElementById('comenzarBtn');
if (comenzarBtn) {
  comenzarBtn.addEventListener('click', () => {
    const portada = document.getElementById('portada');
    portada.classList.add('fade-out');
    setTimeout(() => { portada.style.display = 'none'; }, 400);
  });
}

document.querySelectorAll(".hechizo-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const hechizo = btn.nextElementSibling;
    hechizo.style.display = hechizo.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".apendice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const apendice = btn.nextElementSibling;
    apendice.style.display = apendice.style.display === "block" ? "none" : "block";
  });
});

console.log(" Hechizos de Código listo ");


document.addEventListener('DOMContentLoaded', () => {
  const source = document.getElementById('apendice-code');
  const target = document.getElementById('apendice-code-target');
  if (source && target) {
    target.textContent = source.textContent.trim();
  }
});
