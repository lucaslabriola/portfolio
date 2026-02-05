import "../styles/contact.css";
import { Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-divider"></div>

          <form className="contact-form">
            <h2 className="section-title">Contacto</h2>
            <h3 className="section-subtitle">
            Te responderé lo antes posible
            </h3>

            <div className="form-group form-row">
                <div className="form-field">
                    <label htmlFor="name">Nombre *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="¿Cómo te llamás?"
                        required
                    />
                </div>

               <div className="form-field">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nombre@email.com"
                        autoComplete="email"
                        required
                    />
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Contame brevemente en qué puedo ayudarte"
                    required
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-send">
                Enviar mensaje
                <Send size={18} />
            </button>
          </form>
      </div>
    </section>
  );
}

export default Contact;
