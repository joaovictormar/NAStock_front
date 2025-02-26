import { useEffect, useState } from "react";
import CardModificarPatrimonio from "../../../components/Others/CardModificarPatrimonio";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EditarPatrimonio.module.css";

function EditarPatrimonio() {
    const [patrimonio, setPatrimonio] = useState("");
    const [local, setLocal] = useState("");
    const [obs, setObs] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [entrada, setEntrada] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state || {};

    useEffect(() => {
        const fetchPatrimonio = async () => {
            try {
                const response = await fetch(`http://localhost:5000/patrimonios/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPatrimonio(data.patrimonio || "");
                    setLocal(data.local || "");
                    setEntrada(data.local || ""); 
                    setObs(data.obs || "");
                } else {
                    setMensagem("Erro ao carregar dados do patrimônio");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
                setMensagem("Erro ao conectar com a API.");
            }
        };

        if (id) {
            fetchPatrimonio();
        }
    }, [id]);

    const editarPatrimonio = async (e) => {
        e.preventDefault();

        const patrimonioEditado = {
            ...(patrimonio && { patrimonio }),
            ...(local && { local }),
            ...(obs && { obs })
        };

        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patrimonioEditado)
            });

            if (response.ok) {
                await criarHistorico(); 
                setMensagem("Patrimônio editado com sucesso!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setMensagem("Erro ao editar patrimônio.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };

    const criarHistorico = async () => {
        const novoHistorico = {
            patrimonio_id: id,
            entrada: local, 
            saida: entrada 
        };

        try {
            const response = await fetch("http://localhost:5000/historico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoHistorico)
            });

            if (!response.ok) {
                console.error("Erro ao criar histórico");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
        }
    };

    return (
        <section className={styles.editarPatrimonio}>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            <CardModificarPatrimonio
                patrimonio={patrimonio}
                local={local}
                setLocal={setLocal}
                obs={obs}
                setObs={setObs}
                enviarFormulario={editarPatrimonio} // Passa apenas a função principal
            />
        </section>
    );
}

export default EditarPatrimonio;
