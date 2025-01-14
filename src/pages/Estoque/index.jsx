import { useState,useEffect } from "react";
import CardLocalEquipamento from "../../components/Others/CardLocalEquipamento";

function Estoque () {

    const [patrimonios, setPatrimonios] = useState([]);   
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
            fetch("http://localhost:5000/patrimonios/estoque")
            .then((response) => response.json())
            .then((data) => setPatrimonios(data))
            .catch((error) => console.log(`Erro ao buscar patrimonios no estoque: ${error}`))
    }, []);


    const idDosEquipamentos = patrimonios.map((patrimonio) => patrimonio.equipamento_id);

    useEffect(() => {
        fetch(`http://localhost:5000/equipamentos/${idDosEquipamentos}`)
        .then((response) => response.json())
        .then(data => setEquipamentos(data))
        .catch((error) => console.log(`Erro ao buscar equipamentos no estoque: ${error}`))
    }, []);

    return (
        <CardLocalEquipamento/>
    )

};

export default Estoque;