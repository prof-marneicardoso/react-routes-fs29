import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="logo">Buenas Rotas</div>

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={menuOpen ? "open" : ""}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/produtos" onClick={() => setMenuOpen(false)}>Produtos</Link></li>
                <li><Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link></li>
                <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
            </ul>
        </nav>
    );
}
