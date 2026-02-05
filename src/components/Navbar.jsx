import { Home, User, Code, Briefcase, Phone } from "lucide-react";
import "../styles/navbar.css";

function Navbar({ isOpen }) {
    return (
        <nav id="navbar" className={isOpen ? "open" : ""}>
            <ul>
                <li>
                    <a href="#home" className="nav-link active">
                        <Home size={16} />
                        <span>Inicio</span>
                    </a>
                </li>

                <li>
                    <a href="#about" className="nav-link">
                        <User size={16} />
                        <span>Sobre mí</span>
                    </a>
                </li>

                <li>
                    <a href="#skills" className="nav-link">
                        <Code size={16} />
                        <span>Habilidades</span>
                    </a>
                </li>

                <li>
                    <a href="#projects" className="nav-link">
                        <Briefcase size={16} />
                        <span>Proyectos</span>
                    </a>
                </li>

                <li>
                    <a href="#contact" className="nav-link">
                        <Phone size={16} />
                        <span>Contacto</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
