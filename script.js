const PROFILE = {
    name: "Alex Soucheiron García",
    role: "Estudiant d'Enginyeria Informàtica",
    about: "Sóc estudiant d'Enginyeria Informàtica a la Universitat Autònoma de Barcelona, especialitzat en Enginyeria del Software. Tinc un gran interès en el desenvolupament d'aplicacions i web ja sigui desde la concepció de la idea fins a la seva implementació i manteniment. \n \n Durant la carrera he treballat en projectes molt diversos, des de jocs i aplicacions acadèmiques fins a sistemes més complexos com punts de venda o eines de gestió de dades. Aquests projectes m'han ajudat a enfortir els coneixements en llenguatges com Java, C++ o Javascript, així com bones pràctiques de disseny de programari i ús de metodologies àgils. \n \n M'agrada aprendre noves tecnologies i afrontar reptes que em permetin créixer com a desenvolupador. Em motiva especialment treballar en equips col·laboratius, on puc aportar però sobretot aprendre de l'experiència dels altres. El meu objectiu és continuar desenvolupant-me en l'àmbit del software engineering i contribuïr a la creació de productes útils i de qualitat. \n \n",
    avatar: "Foto.jpeg",
    cvLink: "#", // posa l'enllaç al teu CV
    linkedin: "https://www.linkedin.com/in/alex-soucheiron-garc%C3%ADa-91aa0b383?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO5neAWfZSv2pCAWzzr927Q%3D%3D",
    github: "https://github.com/asoucheiron?tab=repositories",
    skills: ["Java", "C++", "Git", "HTML/CSS", "JavaScript", "Linux"],
    projects: [
        {
            title: "Doors (Projecte Java)",
            short: "Implementació d'un projecte de control de bloqueig i desbloqueig remot de portes.",
            desc: "Projecte implementat amb Java que ens permet obrir i tancar portes amb un botó, però ademés de poder gestionar portes individualment, també podem tancar plantes senceres i inclús l'edifici sencer.",
            tech: ["Java"],
            github: "#",
            demo: "#"
        },
        {
            title: "QuickPlan",
            short: "Aplicació social desenvolupada a classe",
            desc: "Projecte acadèmic, en que en un grup format per 8 persones, vam desenvolupar una app social d'esdeveniments i hàbits.",
            tech: ["Kotlin, Java"],
            github: "#",
            demo: "#"
        },
        {
            title: "Botiga On-line",
            short: "Implementació d'una botiga de compres online",
            desc: "Creació d'una pàgina web per a la compra de samarretes esportives com futbol, basket, Formula 1...",
            tech: ["HTML", "PHP", "CSS", "JavaScript", "SQL"],
            github: "https://github.com/asoucheiron/TodoCamisetas",
            demo: "#"
        },
        {
            title: "Quiz Master",
            short: "Creació personal d'un joc de cultura general.",
            desc: "Aplicació per android sobre preguntes de cultura general amb diversos modes de Joc.",
            tech: ["Kotlin", "Java"],
            github: "https://github.com/asoucheiron/Quiz-Master",
            demo: "#"
        }
    ]
}


// ------------------------------
// Lògica d'inserció i interacció
// ------------------------------
document.getElementById('name').innerText = PROFILE.name + ' — ' + PROFILE.role;
//document.getElementById('role').innerText = PROFILE.role;
//document.getElementById('tagline').innerText = PROFILE.tagline;
document.getElementById('about-text').innerText = PROFILE.about;
document.getElementById('avatar').src = PROFILE.avatar;
document.getElementById('downloadCv').href = PROFILE.cvLink;
document.getElementById('linkedin').href = PROFILE.linkedin;
document.getElementById('github').href = PROFILE.github;
document.getElementById('year').innerText = new Date().getFullYear();


// Skills
const skillsList = document.getElementById('skills-list');
PROFILE.skills.forEach(s => {
    const el = document.createElement('div'); el.className = 'skill'; el.innerText = s; skillsList.appendChild(el);
})


// Projects
const projectsGrid = document.getElementById('projects-grid');
PROFILE.projects.forEach((p, idx) => {
    const div = document.createElement('div'); div.className = 'project card';
    div.innerHTML = `<h3>${p.title}</h3><p>${p.short}</p><div class="meta">${p.tech.join(' · ')}</div>`;
    div.addEventListener('click', () => openModal(p));
    projectsGrid.appendChild(div);
})


// Modal
const modal = document.getElementById('modal');
function openModal(p) {
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-tech').innerText = 'Tecnologies: ' + (p.tech || []).join(', ');
    document.getElementById('modal-github').href = p.github || '#';
    document.getElementById('modal-demo').href = p.demo || '#';
    modal.style.display = 'flex';
}
document.getElementById('closeModal').addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none' });