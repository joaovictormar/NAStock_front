import styles from "./VincularEquipamento.module.css";
import CardVincular from "../../../components/Others/CardVincular";
import { useState, useEffect } from "react";

function VincularEquipamento() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [modeloSelecionado, setModeloSelecionado] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [local, setLocal] = useState("");
    const [obs, setObs] = useState("");
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => setEquipamentos(data))
            .catch((error) => console.log(`Erro ao buscar equipamentos: ${error}`));
    }, []);

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
            patrimonio,
            local,
            obs,
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
                setPatrimonio("");
                setLocal("");
                setObs("");
            } else {
                setMensagem("Erro ao vincular patrimônio.");
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
                patrimonio={patrimonio}
                setPatrimonio={setPatrimonio}
                local={local}
                setLocal={setLocal}
                obs={obs}
                setObs={setObs}
                criaPatrimonio={criaPatrimonio}
            />
        </section>
    );
}

export default VincularEquipamento;
