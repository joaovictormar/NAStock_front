import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";

import Equipamento from "./pages/Equipamento";
import AdicionarEquipamento from "./pages/Secondary/AdicionarEquipamento";
import EditarEquipamento from "./pages/Secondary/EditarEquipamento";
import VincularEquipamento from "./pages/Secondary/VincularEquipamento";

import Patrimonio from "./pages/Patrimonio";    
import Estoque from "./pages/Secondary/EstoquePatrimonio";

import Categorias from "./pages/Categorias";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route path="/equipamentos" element={<Equipamento/>}/>
                    <Route path="/equipamentos/adicionar" element= {<AdicionarEquipamento/>}/>
                    <Route path="/equipamentos/vincular" element={<VincularEquipamento/>}/>
                    <Route path="/equipamentos/editar" element={<EditarEquipamento/>}/>

                    <Route path="/patrimonios" element={<Patrimonio/>}/>
                    <Route path="/patrimonios/estoque" element={<Estoque/>}/>

                    <Route path="/categorias" element= {<Categorias/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;