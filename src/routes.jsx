import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Categorias from "./pages/Categorias";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route path="/categorias" element= {<Categorias/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;