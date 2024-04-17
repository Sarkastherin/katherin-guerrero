function toggleMenu() {
  let menu = document.querySelector('.nav-menu');
  menu.classList.toggle('nav-menu--hidden')
}
function toggleTheme() {
  let body = document.querySelector('body');
  body.classList.toggle('light-theme')
}
const data = [
  {
    title: "Capacidad de Análisis",
    body: "Analizo minuciosamente los procesos empresariales en busca de áreas de mejora, alineándolos a estándares internacionales como ISO 9001, con el objetivo de cumplir con las metas de la organización.",
    img: "./assets/image/deep-learning.svg"
  },
  {
    title: "Desarrollo de Mejoras Continuas",
    body: "Implemento procesos de mejora continua, gestinando eficazmente equipos de trabajo para el logro de soluciones eficientes y sostenibles.",
    img: "./assets/image/mejora-continua.svg"
  },
  {
    title: "Planificación Estratégica",
    body: "Diseño planes estratégicos para implementar mejoras coherentes con objetivos organizacionales.",
    img: "./assets/image/planificacion-estrategica.svg"
  },
  {
    title: "Conformidad con Normas Internacionales",
    body: "Experiencia sólida en garantizar el cumplimiento riguroso de normas ISO 9001, asegurando calidad en operaciones.",
    img: "./assets/image/iso-9001.svg"
  },
  {
    title: "Optimización Digital",
    body: "Diseño tecnologías innovadoras para digitalizar procesos, mejorando eficiencia y reduciendo costos.",
    img: "./assets/image/optimizacion-digital.svg"
  },
  {
    title: "Colaboración Efectiva",
    body: "Facilito la comunicación entre departamentos para una implementación fluida y una cultura centrada en la calidad.",
    img: "./assets/image/conversation.svg"
  },
]

function loadCardsCompetencia() {
  const input = document.querySelector('.container-cards');
  data.map(item => {
    let div = document.createElement('div');
    div.classList.add('card')
    let content = `
    <div class="card-header">
    <img src="${item.img}" alt="">
      <h3>${item.title}</h3>
    </div>
    <div class="card-body">
      <p>
      ${item.body}
      </p>
    </div>
    `
    div.innerHTML = content
    input.appendChild(div)
  })
}
loadCardsCompetencia()