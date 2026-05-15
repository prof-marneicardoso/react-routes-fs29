import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

export default function About() {
    return(
        <>
        <Navbar />
        <Header />
        <Main>
            <h2>Sobre</h2>

            <p>Saiba mais sobre a nossa história</p>
        </Main>
        <Footer />
        </>
    );
}
