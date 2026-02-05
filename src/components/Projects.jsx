import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "SIFEC",
    description: "Sistema de gestión administrativa en C# WinForms y SQL Server",
    github: "#",
    preview: "#"
  },
  {
    id: 2,
    title: "Sistema Gimnasio",
    description: "Gestión de socios, pagos y vencimientos",
    github: "#",
    preview: "#"
  },
  {
    id: 3,
    title: "Gestión de Envíos",
    description: "Seguimiento de envíos y estados",
    github: "#",
    preview: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
        <div className="container">

            <h2 className="section-title">
                Mis <span className="title-highlight">proyectos</span>
            </h2>

            <div className="projects-list">
                {projects.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>

        </div>
    </section>
  );
}

export default Projects;
