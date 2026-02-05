import { useState } from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header id="header">
            <div className="container">

                <a href="#" className="logo">LucasDev</a>

                <Navbar isOpen={menuOpen} />

                <button
                    id="mobile-menu-btn"
                    aria-label="Mobile menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>
        </header>
    );
}

export default Header;
