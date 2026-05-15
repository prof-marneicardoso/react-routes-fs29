import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

export default function NotFound() {
    return(
        <>
        <Navbar />
        <Header />
        <Main>
            <h2>404 - Página não encontrada</h2>

            <p>
                <Link to="/">Retornar para a página principal</Link>
            </p>

            {/* <a href="/">Home</a> */}
        </Main>
        <Footer />
        </>
    );
}
