import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import AddEquipamentos from "./pages/Secondary/AddEquipamentos";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/categorias" element= {<Categorias/>}/>
                    <Route path="/addequipamentos" element= {<AddEquipamentos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;