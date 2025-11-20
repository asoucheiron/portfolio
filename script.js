const PROFILE = {
    name: "Alex Soucheiron García",
    role: "Estudiante de Ingeniería Informática",
    about: "Soy estudiante de Ingeniería Informática en la Universidad Autónoma de Barcelona, especializado en ingeniería del Software. Tengo un gran interés en el desarrollo de aplicaciones y web ya sea desde la concepción de la idea hasta su implementación y mantenimiento. \n \n Durante la carrera he trabajado en proyectos muy diversos, des de juegos y aplicaciones académicas hasta sistemes más complejos como herramientas de gestión de datos. Estos proyectos me han ayudado a fortalecer los conocimientos en lenguajes como Java, C++ o Javascript, así como buenas prácticas de diseño de programario y uso de metodologías ágiles. \n \n Me gusta aprender nuevas tecnologías y afrontar retos que me permitan crecer como desarrollador. Me motiva especialmente trabajar en equipos colaborativos, donde puedo aportar pero sobre todo aprender de la experiencia de los demás. Mi objetivo es continuar desarrollandome en el ámbito del Software engineering y contribuir a la creación de productos útiles y de calidad. \n \n",
    avatar: "Foto2.jpeg",
    cvLink: "CV_AlexSoucheiron.pdf",
    linkedin: "https://www.linkedin.com/in/alex-soucheiron-garc%C3%ADa-91aa0b383",
    github: "https://github.com/asoucheiron?tab=repositories",
    skills: ["Java", "C++", "Git", "HTML/CSS", "JavaScript", "Linux"],
    projects: [
        {
            title: "Rutas",
            short: "Implementación de una web para conductores de Bus",
            desc: "Implementado usando HTML, CSS, Javascript y una API de google, ha sido diseñada para ayudar a los transfers desde el aeropuerto que tienen diferentes paradas en su ruta para ver cuál es el recorrido más eficiente",
            tech: ["HTML, CSS, JavaScript"],
            github: "https://github.com/asoucheiron/Canva-web",
        },
        {
            title: "QuickPlan",
            short: "Aplicación social desarrollada en clase",
            desc: "Proyecto académico, en que en un grupo formado por 8 personas, desarrollamos una app social de eventos y hábitos.",
            tech: ["Kotlin", "Java"],
            github: "https://github.com/asoucheiron?tab=repositories",
        },
        {
            title: "Tienda On-line",
            short: "Implementación de una tienda de compras online",
            desc: "Creación de una página web para la compra de camisetas deportivas como futbol, basket, Formula 1...",
            tech: ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
            github: "https://github.com/asoucheiron/TodoCamisetas",
        },
        {
            title: "Quiz Master",
            short: "Creación personal de un juego de cultura general.",
            desc: "Aplicación para android sobre preguntas de cultura general con diversos modos de Juego. APLICACIÓn EN DESARROLLO",
            tech: ["Kotlin", "Java"],
            github: "https://github.com/asoucheiron/Quiz-Master",
        }
    ]
}

// ------------------------------
// Inserció i interacció
// ------------------------------

// Nom i rol
document.getElementById('name').innerText = PROFILE.name + ' — ' + PROFILE.role;

// Sobre mi
document.getElementById('about-text').innerText = PROFILE.about;

// Avatar
const avatarEl = document.getElementById('avatar');
avatarEl.src = PROFILE.avatar;
avatarEl.alt = PROFILE.name;

// Descàrrega CV
const downloadBtn = document.getElementById('downloadCv');
downloadBtn.href = PROFILE.cvLink;
downloadBtn.setAttribute('download', 'CV_AlexSoucheiron.pdf'); // Força la descàrrega
downloadBtn.target = "_blank"; // Alternativa en navegadors que ignoren download (iOS)

// Xarxes socials
document.getElementById('linkedin').href = PROFILE.linkedin;
document.getElementById('github').href = PROFILE.github;

// Any actual
document.getElementById('year').innerText = new Date().getFullYear();

// Skills
const skillsList = document.getElementById('skills-list');
PROFILE.skills.forEach(s => {
    const el = document.createElement('div');
    el.className = 'skill';
    el.innerText = s;
    skillsList.appendChild(el);
})

// Projects
const projectsGrid = document.getElementById('projects-grid');
PROFILE.projects.forEach((p) => {
    const div = document.createElement('div');
    div.className = 'project card';
    div.innerHTML = `<h3>${p.title}</h3><p>${p.short}</p><div class="meta">${p.tech.join(' · ')}</div>`;
    div.addEventListener('click', () => openModal(p));
    projectsGrid.appendChild(div);
})

// Modal
const modal = document.getElementById('modal');
function openModal(p) {
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-tech').innerText = 'Tecnologías: ' + (p.tech || []).join(', ');
    document.getElementById('modal-github').href = p.github || '#';
    //document.getElementById('modal-demo').href = p.demo || '#';
    modal.style.display = 'flex';
}
document.getElementById('closeModal').addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none' });
