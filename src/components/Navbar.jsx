import { useEffect, useState } from "react";
import { Briefcase, FileText, Home, Phone, User } from "lucide-react";
import "../styles/navbar.css";

function Navbar({ isOpen }) {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "recruiters", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="navbar" className={isOpen ? "open" : ""}>
            <ul>
    <li>
        <a 
            href="#home" 
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
        >
            <Home size={16} />
            <span>Inicio</span>
        </a>
    </li>

    <li>
        <a 
            href="#about" 
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
        >
            <User size={16} />
            <span>Sobre mí</span>
        </a>
    </li>

    <li>
        <a 
            href="#projects" 
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
        >
            <Briefcase size={16} />
            <span>Proyectos</span>
        </a>
    </li>

    <li>
        <a 
            href="#recruiters" 
            className={`nav-link ${activeSection === "recruiters" ? "active" : ""}`}
        >
            <FileText size={16} />
            <span>CV</span>
        </a>
    </li>

    <li>
        <a 
            href="#contact" 
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
        >
            <Phone size={16} />
            <span>Contacto</span>
        </a>
    </li>
</ul>
        </nav>
    );
}

export default Navbar;
