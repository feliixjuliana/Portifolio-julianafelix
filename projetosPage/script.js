document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Site de E-commerce',
            description: 'Uma plataforma de e-commerce moderna construída com foco em React.ts, TypeScript e consumo de api.',
            image: '../public/projetoGreenShop/inicial.png',
            tags: ['React.js', 'TypeScript'],
            dataAiHint: 'online store',
            repositoryLink: 'https://github.com/feliixjuliana/blueshop-web2'
        },
        {
            title: 'Site de biblioteca de Filmes',
            description: 'Desenvolvimento FullStack com TypeScript, React.js e Banco de Dados relacional.',
            image: '../public/projetoCatalogoFilmes/inicial.png',
            tags: ['MySQL', 'React.js', 'TypeScript'],
            dataAiHint: 'analytics chart',
            repositoryLink: 'https://github.com/feliixjuliana/CatalogoFilmes-Web2'
        },
        {
            title: 'Site de Filmes - Studio Ghibli',
            description: 'Um site feito em CSS puro para catalogar os filmes do Studio Ghibli.',
            image: '../public/studioGhibli/studioGhibli.png',
            tags: ['HTML', 'CSS'],
            dataAiHint: 'studio ghibli',
            repositoryLink: 'https://github.com/feliixjuliana/StudioGhibli_Novo'
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function displayProjects(projectsToDisplay) {
        projectsGrid.innerHTML = '';

        projectsToDisplay.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" data-ai-hint="${project.dataAiHint}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.repositoryLink}" target="_blank" rel="noopener noreferrer" class="repository-btn">
                        Ver Repositório
                    </a>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    function filterProjects(filter) {
        let filteredProjects;

        if (filter === 'all') {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter(project => project.tags.includes(filter));
        }

        const allCards = document.querySelectorAll('.project-card');
        allCards.forEach(card => card.classList.remove('show'));
        
        displayProjects(filteredProjects);
        
        setTimeout(() => {
            const newCards = document.querySelectorAll('.project-card');
            newCards.forEach(card => card.classList.add('show'));
        }, 10);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });

    filterProjects('all');
});