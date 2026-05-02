import { useState } from "react";
import { Send } from "lucide-react";
import "../styles/contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvagwpk";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: "Mensaje enviado. Te responderé lo antes posible.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message: "Hubo un problema al enviar el mensaje. Probá de nuevo en unos minutos.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Nuevo mensaje desde portfolio" />

          <h2 className="section-title-about">
            Contacto <span className="title-highlight">directo</span>
          </h2>
          <div className="section-divider-contact"></div>
          <h3 className="section-subtitle">Te responderé lo antes posible</h3>

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

          {submitState.message ? (
            <p className={`form-feedback ${submitState.type}`} role="status" aria-live="polite">
              {submitState.message}
            </p>
          ) : null}

          <button type="submit" className="btn btn-primary btn-send" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
