import './Portfolio.css';

import img2 from './assets/basquete-grupo.jpg';
import img3 from './assets/ei-redbull.jpg';
import img4 from './assets/ei-redbull-2.jpg';
import img5 from './assets/glr-na-faculdade.jpg';

const projects = [
    {
        title: "Basquete em Grupo",
        image: img2,
        description: "Foto com o time de basquete."
    },
    {
        title: "Evento Red Bull",
        image: img3,
        description: "Participação em evento Red Bull."
    },
    {
        title: "Red Bull #2",
        image: img4,
        description: "Outra foto do evento Red Bull."
    },
    {
        title: "Faculdade",
        image: img5,
        description: "Galera reunida na faculdade."
    }
];

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2>Meu Portfólio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
