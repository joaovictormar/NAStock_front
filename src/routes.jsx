import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import AddEquipamento from "./pages/Secondary/AddEquipamento";
import EditarEquipamento from "./pages/Secondary/EditarEquipamento";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/categorias" element= {<Categorias/>}/>
                    <Route path="/addequipamento" element= {<AddEquipamento/>}/>
                    <Route path="/editarequipamento" element={<EditarEquipamento/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;