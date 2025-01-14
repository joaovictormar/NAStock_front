import styles from "./CardVincularPatrimonio.module.css";
import { useState, useEffect } from "react";

function CardVincularPatrimonio() {
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
        <section className={styles.card}>
            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
            <div className={styles.cardPrincipal}>
                <select
                className={styles.selecao}
                value={modeloSelecionado}
                onChange={(e) => setModeloSelecionado(e.target.value)}
                required>
                    <option className={styles.opcao} value="" disabled>Selecione um modelo</option>
                    {equipamentos.map((equipamento) => (
                    <option className={styles.opcao} key={equipamento.id} value={equipamento.modelo}>
                    {equipamento.modelo}
                    </option>))}
                </select>
                <form className={styles.cardVincularPatrimonio} onSubmit={criaPatrimonio}>
                    <div className={styles.formularios}>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>Patrimônio:</label>
                            <input
                                onChange={(e) => setPatrimonio(e.target.value)}
                                value={patrimonio}
                                className={styles.input}
                                type="text"
                                required
                            />
                        </div>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>Local:</label>
                            <input
                                onChange={(e) => setLocal(e.target.value)}
                                value={local}
                                className={styles.input}
                                type="text"
                                required
                            />
                        </div>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>OBS:</label>
                            <input
                                onChange={(e) => setObs(e.target.value)}
                                value={obs}
                                className={styles.input}
                                type="text"
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.botao}>
                        Vincular Patrimônio
                    </button>
                </form>
            </div>
        </section>
        
    );
}

export default CardVincularPatrimonio;
