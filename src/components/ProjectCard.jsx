function ProjectCard({ title, description, github, preview }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-actions">
            <button>Github</button>
            <button>Ver detalles</button>
            <button>Vista previa</button>
      </div>
    </div>
  );
}

export default ProjectCard;
