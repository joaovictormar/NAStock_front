import styles from "./VincularEquipamento.module.css";
import CardVincular from "../../../components/Others/CardVincular";
import { useState, useEffect } from "react";

function VincularEquipamento() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [modeloSelecionado, setModeloSelecionado] = useState("");
    const [local, setLocal] = useState("");
    const [obs, setObs] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [serial, setSerial] = useState("");
    const [garantia, setGarantia] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => setEquipamentos(data))
            .catch((error) => console.log(`Erro ao buscar equipamentos: ${error}`));
    }, []);

    useEffect(() => {
        if (local === "Estoque") {
            setEmpresa("NAS IT");  
        } else if (local === "Locação") {
            setEmpresa("");  
        }
    }, [local]);  

    const criaPatrimonio = async (e) => {
        e.preventDefault();

        const equipamentoSelecionado = equipamentos.find(
            (equipamento) => equipamento.modelo === modeloSelecionado
        );

        if (!equipamentoSelecionado) {
            setMensagem("Equipamento não encontrado para o modelo selecionado.");
            return;
        }

        const novosEquipamentos = {
            equipamento_id: equipamentoSelecionado.id,
            empresa,
            local,
            obs,
            serial,
            garantia
        };

        try {
            const response = await fetch("http://localhost:5000/patrimonios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novosEquipamentos),
            });

            if (response.ok) {
                setMensagem("Equipamento vinculado ao patrimônio com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                setModeloSelecionado("");
                setLocal("");
                setObs("");
                setEmpresa(""); 
                setSerial("");
                setGarantia("");
            } else {
                const errorData = await response.json();
                setMensagem(errorData.error || "Erro inesperado. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };

    return (
        <section className={styles.vincularEquipamento}>
            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
            <CardVincular
                equipamentos={equipamentos}
                modeloSelecionado={modeloSelecionado}
                setModeloSelecionado={setModeloSelecionado}
                local={local}
                setLocal={setLocal}
                obs={obs}
                setObs={setObs}
                empresa={empresa} 
                setEmpresa={setEmpresa}
                serial={serial}
                setSerial={setSerial}
                categoria={categoria}
                setGarantia={setGarantia}
                criaPatrimonio={criaPatrimonio}
            />
        </section>
    );
}

export default VincularEquipamento;
