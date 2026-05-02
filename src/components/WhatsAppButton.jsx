import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        const mensaje = "¡Hola! Vengo desde tu portfolio web";
        window.open(`https://wa.me/5491133119977?text=${encodeURIComponent(mensaje)}`, "_blank");
    };



    return (
        <button 
            className={`whatsapp-button ${visible ? "show" : ""}`}
            onClick={handleClick}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={32} />
        </button>
    );
}

export default WhatsAppButton;