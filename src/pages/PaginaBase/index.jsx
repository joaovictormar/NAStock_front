import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";

function PaginaBase () {

    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )

}

export default PaginaBase;