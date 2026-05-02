import "../styles/about.css";

function About() {

const skills = [
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: ".NET Framework", icon: "devicon-dotnetcore-plain colored" },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Pandas", icon: "devicon-pandas-plain colored" },
    { name: "Numpy", icon: "devicon-numpy-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
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
                            Analista en Sistemas con experiencia en desarrollo y mantenimiento
                            de sistemas administrativos en C# .NET (WinForms) y SQL Server.
                            Actualmente me desempeño en el sector público, liderando una secciónoperativa y participando en la mejora y automatización de procesos internos.
                        </p>

                        <p>
                            Formación técnica en programación, bases de datos y
                            análisis de datos, con fuerte orientación a estructuras sólidas,
                            trazabilidad y optimización de sistemas existentes.
                        </p>
                    </div>
                </div>


               <section id="skills" className="section skills">

                    <h2 className="section-title-about">
                        Mis <span className="title-highlight">habilidades</span>
                    </h2>
                    <div className="section-divider"></div>

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
