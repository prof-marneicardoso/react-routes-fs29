import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return(
        <nav>
            <div className="logo">Buenas Rotas</div>

            <ul>
                {/* O link aponta para o caminho no AppRoutes */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
}
