import { useState, useEffect } from "react";
import styles from "./Estoque.module.css";
import CardPatrimonio from "../../../components/Others/CardPatrimonio";

function Estoque() {
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentosComDados, setEquipamentosComDados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios/estoque")
            .then((response) => response.json())
            .then((data) => {
                console.log("Patrimônios recebidos:", data); 
                setPatrimonios(data);
            })
            .catch((error) => console.log(`Erro ao buscar patrimonios no estoque: ${error}`));
    }, []);

    useEffect(() => {
        if (patrimonios.length > 0) {
            const promises = patrimonios.map((patrimonio) =>
                fetch(`http://localhost:5000/equipamentos/${patrimonio.equipamento_id}`)
                    .then((response) => response.json())
            );

            Promise.all(promises)
                .then((equipamentosData) => {
                    const combinados = equipamentosData.map((equipamento, index) => {
                        const patrimonioRelacionado = patrimonios[index];
                        return {
                            ...equipamento,
                            quantidade: patrimonioRelacionado?.quantidade || 0,
                            patrimonio: patrimonioRelacionado?.patrimonio || "N/A",
                            local: patrimonioRelacionado?.local || "N/A",
                            obs: patrimonioRelacionado?.obs || "N/A",
                        };
                    });

                    console.log("Dados combinados:", combinados); 
                    setEquipamentosComDados(combinados);
                })
                .catch((error) => console.log(`Erro ao buscar equipamentos no estoque: ${error}`));
        }
    }, [patrimonios]);

    return (
        <div className={styles.card}>
            {equipamentosComDados.length > 0 ? (
                equipamentosComDados.map((equipamento) => (
                    <CardPatrimonio
                        key={equipamento.id}
                        categoria={equipamento.categoria}
                        marca={equipamento.marca}
                        modelo={equipamento.modelo}
                        processador={equipamento.processador}
                        memoria={equipamento.memoria}
                        disco={equipamento.disco}
                        quantidade={equipamento.quantidade}
                        patrimonio={equipamento.patrimonio}
                        local={equipamento.local}
                        obs={equipamento.obs}
                        imagem={equipamento.imagem}
                    />
                ))
            ) : (
                <h1>Erro ao carregar equipamentos...</h1>
            )}
        </div>
    );
}

export default Estoque;
