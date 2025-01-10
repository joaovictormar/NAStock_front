import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/categorias" element= {<Categorias/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;