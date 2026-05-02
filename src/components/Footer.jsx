import "../styles/footer.css";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-social">
                    <a href="https://github.com/lucaslabriola" target="_blank" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-gustavo-labriola/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedinIn size={20} />
                    </a>

                    <a href="mailto:lucas.labriola@hotmail.com" aria-label="Email">
                        <MdEmail size={22} />
                    </a>

                    <a href="https://wa.me/5491133119977" target="_blank" aria-label="WhatsApp">
                        <FaWhatsapp size={22} />
                    </a>
                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} LL Dev - Todos los derechos reservados
                </div>

            </div>
        </footer>
    );
}

export default Footer;
