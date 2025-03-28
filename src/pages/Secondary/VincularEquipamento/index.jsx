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
    const [clientes, setClientes] = useState([]);
    const [disco, setDisco] = useState("");
    const [memoria, setMemoria] = useState("");

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

        const entrada = new Date().toISOString().split("T")[0]; 

        const novosEquipamentos = {
            equipamento_id: equipamentoSelecionado.id,
            empresa,
            local,
            obs,
            serial,
            garantia,
            entrada,
            memoria: equipamentoSelecionado.memoria,
            disco: equipamentoSelecionado.disco,
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
                setDisco("");
                setMemoria("");
            } else {
                const errorData = await response.json();
                setMensagem(errorData.error || "Erro inesperado. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/clientes")
                .then((response) => response.json())
                .then((data) => setClientes(data))
                .catch((error) => console.log(`Erro ao buscar clientes: ${error}`));
    }, []);

    const campoCliente = clientes.map((cliente) => ({
        id: cliente.id, 
        nome: cliente.cliente
    }));

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
                garantia={garantia}
                setGarantia={setGarantia}
                criaPatrimonio={criaPatrimonio}
                campoCliente={campoCliente}
            />
        </section>
    );
}

export default VincularEquipamento;
