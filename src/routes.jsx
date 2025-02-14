import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";

import Equipamento from "./pages/Equipamento";
import AdicionarEquipamento from "./pages/Secondary/AdicionarEquipamento";
import EditarEquipamento from "./pages/Secondary/EditarEquipamento";
import VincularEquipamento from "./pages/Secondary/VincularEquipamento";

import Patrimonio from "./pages/Patrimonio";    
import Estoque from "./pages/Secondary/EstoquePatrimonio";
import Locado from "./pages/Secondary/LocadoPatrimonio";

import Historico from "./pages/Historico";

import Sobre from "./pages/Sobre";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Equipamento/>}/>
                    <Route path="/sobre" element= {<Sobre/>}/>
                    <Route path="/historico/patrimonios" element={<Historico/>}/>
                    <Route path="/equipamentos/adicionar" element= {<AdicionarEquipamento/>}/>
                    <Route path="/equipamentos/vincular" element={<VincularEquipamento/>}/>
                    <Route path="/equipamentos/editar" element={<EditarEquipamento/>}/>
                    <Route path="/patrimonios" element={<Patrimonio/>}/>
                    <Route path="/patrimonios/estoque" element={<Estoque/>}/>
                    <Route path="/patrimonios/locado" element={<Locado/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;