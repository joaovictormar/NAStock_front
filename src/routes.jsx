import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";

import Sobre from "./pages/Sobre";

import Historico from "./pages/Historico";
import HistoricoPatrimonio from "./pages/Secondary/HistoricoPatrimonio";

import Equipamento from "./pages/Equipamento";
import AdicionarEquipamento from "./pages/Secondary/AdicionarEquipamento";
import EditarEquipamento from "./pages/Secondary/EditarEquipamento";
import VincularEquipamento from "./pages/Secondary/VincularEquipamento";

import Patrimonio from "./pages/Patrimonio";    
import AlugarOuDevolverPatrimonio from "./pages/Secondary/AlugarOuDevolverPatrimonio";

import Cliente from "./pages/Cliente";

function AppRoutes () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Equipamento/>}/>
                    <Route path="/sobre" element= {<Sobre/>}/>
                    <Route path="/historico" element={<Historico/>}/>
                    <Route path="/historico/patrimonio/:patrimonio_id" element={<HistoricoPatrimonio/>} />
                    <Route path="/equipamentos/adicionar" element= {<AdicionarEquipamento/>}/>
                    <Route path="/equipamentos/vincular" element={<VincularEquipamento/>}/>
                    <Route path="/equipamentos/editar" element={<EditarEquipamento/>}/>
                    <Route path="/patrimonios" element={<Patrimonio/>}/>
                    <Route path="/patrimonios/alugaroudevolver" element={<AlugarOuDevolverPatrimonio/>} />
                    <Route path="/clientes" element={<Cliente/>}/> 
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;