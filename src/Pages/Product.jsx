import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

export default function Product() {
    return(
        <>
        <Navbar />
        <Header />
        <Main>
            <h2>Produtos</h2>

            <p>Confira nossos produtos em destaque!</p>
        </Main>
        <Footer />
        </>
    );
}
