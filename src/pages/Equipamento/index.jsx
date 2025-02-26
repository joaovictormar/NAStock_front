import styles from "./Equipamento.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../components/Others/Search";
import CardEquipamento from "../../components/Others/CardEquipamento";

function Equipamento() {
    const [equipamentos, setEquipamentos] = useState([]); 
    const [equipamentosFiltrados, setEquipamentosFiltrados] = useState([]); 
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => {
                setEquipamentos(data);
                setEquipamentosFiltrados(data); 
            })
            .catch((error) =>
                console.log(`Erro ao buscar equipamentos: ${error}`)
            );
    }, []);

    const excluiEquipamento = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5000/equipamentos/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                setMensagem("Equipamento excluído com sucesso");
                console.log("Exclusão concluída para o item com ID:", id);

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMensagem(
                    "É necessário excluir todos os patrimônios desse equipamento antes de excluí-lo"
                );
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            setMensagem("Erro ao conectar com a API");
            console.error("Erro ao conectar com a API:", error);
        }
    };

    const buscaDinamica = (query) => {
        if (!query) {
            setEquipamentosFiltrados(equipamentos);
        } else {
            const filtrados = equipamentos.filter((equipamento) =>
                Object.values(equipamento).some((value) =>
                    value.toString().toLowerCase().includes(query.toLowerCase())
                )    
            );
            setEquipamentosFiltrados(filtrados);
        }
    };

    return (
        <section className={styles.equipamento}>
            <div className={styles.equipamentoSuperior}>
                <Search onSearch={buscaDinamica} />
                <div className={styles.links}>
                    <Link to="/equipamentos/adicionar" className={styles.link}>
                        Adicionar Equipamento
                    </Link>
                    <Link to="/equipamentos/vincular" className={styles.link}>
                        Vincular Patrimônio
                    </Link>
                </div>
            </div>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            {equipamentosFiltrados.length > 0 ? (
                equipamentosFiltrados.map((equipamento) => (
                    <CardEquipamento
                        key={equipamento.id}
                        categoria={equipamento.categoria}
                        marca={equipamento.marca}
                        modelo={equipamento.modelo}
                        processador={equipamento.processador}
                        memoria={equipamento.memoria}
                        disco={equipamento.disco}
                        quantidade={equipamento.quantidade}
                    />
                ))
            ) : (
                <h1 className={styles.textoErro}>Sem equipamentos encontrados</h1>
            )}
        </section>
    );
}

export default Equipamento;
