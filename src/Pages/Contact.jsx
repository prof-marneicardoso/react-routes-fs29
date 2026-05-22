import Button from "../Components/Common/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

export default function Contact() {
    return(
        <>
        <Navbar />
        <Header />
        <Main>
            <h2>Contato</h2>

            <p>Entre em contato com a nossa equipe</p>

            <form>
                <Button
                    bgColor="blue"
                    disabled={true}

                >Cadastrar</Button>

                {/* padding: 0.6rem 1.25rem;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                cursor: pointer;
                background-color: #232323;
                color: #f9f9f9; */}
            </form>
        </Main>
        <Footer />
        </>
    );
}
