import "../styles/home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="hero-content">
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-title">Lucas Labriola</h1>
          <h2 className="hero-subtitle">Desarrollador .NET / Full Stack</h2>
          <p className="hero-description">
            Analista en Sistemas con experiencia en C#, .NET y arquitectura de datos.
            Desarrollo soluciones robustas y dashboards analíticos orientados a la optimización de procesos y toma de decisiones.
          </p>
          <div className="hero-cta">
              <a href="#projects" className="btn-primary hero-btn">Ver Proyectos</a>
              <a href="#contact" className="btn-secondary hero-btn">Contactar</a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img 
              src="/img/perfil-image.png"
              alt="Lucas Labriola" 
              className="hero-image"
            />
            
            <div className="hero-floating-card floating-card-1">
              <div className="floating-card-icon">💼</div>
              <p className="floating-card-value">2+ años</p>
              <p className="floating-card-text">Experiencia</p>
            </div>

            <div className="hero-floating-card floating-card-2">
              <div className="floating-card-icon">🚀</div>
              <p className="floating-card-value">Dashboards</p>
              <p className="floating-card-text">& Data</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;