// =========================================================
// MENU MÓVIL
// =========================================================
const menuToggle = document.querySelector(".menu-toggle");
const binNav = document.querySelector(".bin-nav");

menuToggle.addEventListener("click", () => {
  binNav.classList.toggle("open");
});

// =========================================================
// DATOS: materiales y su contenedor correspondiente
// =========================================================
const materiales = [
  { nombre: "Botella de plástico", tipo: "plastico" },
  { nombre: "Bolsa de plástico", tipo: "plastico" },
  { nombre: "Envase de yogurt", tipo: "plastico" },
  { nombre: "Periódico", tipo: "papel" },
  { nombre: "Caja de cartón", tipo: "papel" },
  { nombre: "Cuaderno usado", tipo: "papel" },
  { nombre: "Cáscara de plátano", tipo: "organico" },
  { nombre: "Restos de comida", tipo: "organico" },
  { nombre: "Hojas y ramas de jardín", tipo: "organico" },
  { nombre: "Botella de vidrio", tipo: "vidrio" },
  { nombre: "Frasco de mermelada", tipo: "vidrio" },
  { nombre: "Lata de aluminio", tipo: "metal" },
  { nombre: "Lata de conserva", tipo: "metal" },
  { nombre: "Pila usada", tipo: "peligroso" },
  { nombre: "Celular viejo", tipo: "peligroso" },
  { nombre: "Foco fluorescente", tipo: "peligroso" },
];

const colorPorTipo = {
  papel: "var(--bin-azul)",
  plastico: "var(--bin-amarillo)",
  organico: "var(--bin-verde)",
  vidrio: "var(--bin-azul)",
  metal: "var(--bin-amarillo)",
  peligroso: "var(--bin-gris)",
};

const lista = document.getElementById("lista-materiales");
const sinResultados = document.getElementById("sin-resultados");
const buscador = document.getElementById("buscador");
const chips = document.querySelectorAll(".chip");

let filtroActivo = "todos";

function renderMateriales() {
  const texto = buscador.value.trim().toLowerCase();

  const filtrados = materiales.filter((m) => {
    const coincideTexto = m.nombre.toLowerCase().includes(texto);
    const coincideTipo = filtroActivo === "todos" || m.tipo === filtroActivo;
    return coincideTexto && coincideTipo;
  });

  lista.innerHTML = "";

  if (filtrados.length === 0) {
    sinResultados.hidden = false;
    return;
  }
  sinResultados.hidden = true;

  filtrados.forEach((m) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="mat-bin" style="background:${colorPorTipo[m.tipo]}"></span>
      <span>${m.nombre} — <strong>${m.tipo}</strong></span>
    `;
    lista.appendChild(li);
  });
}

buscador.addEventListener("input", renderMateriales);

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filtroActivo = chip.dataset.filtro;
    renderMateriales();
  });
});

renderMateriales();

// =========================================================
// QUIZ
// =========================================================
const quizForm = document.getElementById("quiz-form");
const quizResultado = document.getElementById("quiz-resultado");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const preguntas = quizForm.querySelectorAll(".quiz-question");
  let correctas = 0;

  preguntas.forEach((pregunta) => {
    const nombre = pregunta.querySelector("input").name;
    const seleccionada = quizForm.querySelector(`input[name="${nombre}"]:checked`);
    const respuestaCorrecta = pregunta.dataset.correcta;

    if (seleccionada && seleccionada.value === respuestaCorrecta) {
      correctas++;
    }
  });

  quizResultado.hidden = false;
  quizResultado.textContent = `Obtuviste ${correctas} de ${preguntas.length} respuestas correctas.`;
});

// =========================================================
// FORMULARIO DE CONTACTO (demo, sin backend)
// =========================================================
const contactoForm = document.getElementById("contacto-form");
const contactoConfirmacion = document.getElementById("contacto-confirmacion");

contactoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactoConfirmacion.hidden = false;
  contactoForm.reset();
});