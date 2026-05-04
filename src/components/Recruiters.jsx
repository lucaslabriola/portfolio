import { Download, Linkedin, Sparkles } from "lucide-react";
import "../styles/recruiters.css";

const CV_URL = `${import.meta.env.BASE_URL}assets/Labriola_Lucas_CV.pdf`;
const LINKEDIN_URL = "https://www.linkedin.com/in/lucas-gustavo-labriola/";

function Recruiters() {
  return (
    <section id="recruiters" className="recruiters-section" aria-labelledby="recruiters-title">
      <div className="recruiters-container">
        <div className="recruiters-content">
          <span className="recruiters-kicker">
            <Sparkles size={18} />
            Disponible para nuevos desafios
          </span>

          <h2 id="recruiters-title">Contactemos</h2>
        </div>

        <div className="recruiters-actions" aria-label="Acciones para reclutadores">
          <a className="recruiters-button recruiters-button-primary" href={CV_URL} download="Labriola_Lucas_CV.pdf">
            <Download size={22} />
            Descargar CV
          </a>

          <a
            className="recruiters-button recruiters-button-secondary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Recruiters;
