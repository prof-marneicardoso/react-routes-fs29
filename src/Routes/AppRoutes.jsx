import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
// export function AppRoutes() {
    return(
        // Lista de Rotas
        <Routes>
            {/* Cada rota aponta para sua página */}
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Product />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
