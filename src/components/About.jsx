import "../styles/about.css";

function About() {

    const skills = [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Node.js / Express", icon: "devicon-nodejs-plain colored" },
        { name: "Supabase", icon: "devicon-supabase-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">

                <h2 className="section-title-about">
                    Sobre <span className="title-highlight">Mí</span>
                </h2>

                <div className="section-divider"></div>

                <div className="about-content">

                    <div className="about-image">
                        <img src="/img/about_image.jpg" alt="Foto de perfil" />
                    </div>


                    <div className="about-text">
                        <p>
                            Soy desarrollador de software con foco en la creación de aplicaciones
                            claras, mantenibles y orientadas a resolver problemas reales.
                            Trabajo tanto en frontend como en backend, con experiencia en
                            interfaces modernas, lógica de negocio y bases de datos.
                        </p>

                        <p>
                            Me interesa construir soluciones bien pensadas, priorizando la
                            experiencia de usuario, la calidad del código y la escalabilidad.
                            Actualmente sigo ampliando mis conocimientos en tecnologías web
                            modernas y buenas prácticas de desarrollo.
                        </p>
                    </div>
                </div>


               <section id="skills" className="section skills">

                    <h3 className="about-subtitle">
                        Mis <span className="title-highlight">habilidades</span>
                    </h3>

                    <div className="skills-list">
                        {skills.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <div className="skill-icon">
                                    <i className={skill.icon}></i>
                                </div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>

                </section>


            </div>
        </section>
    );
}

export default About;
