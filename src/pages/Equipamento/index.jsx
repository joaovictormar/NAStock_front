import styles from "./Equipamento.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../components/Others/Search";
import CardEquipamento from "../../components/Others/CardEquipamento";

function Equipamento() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [mensagem, setMensagem] = useState(""); 

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => setEquipamentos(data))
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
                setMensagem("Erro ao excluir equipamento");
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            setMensagem("Erro ao conectar com a API");
            console.error("Erro ao conectar com a API:", error);
        }
    };

    return (
            
            <section className={styles.equipamento}>
                <div className={styles.equipamentoSuperior}>
                    <Search />
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
                {equipamentos.length > 0 ? (
                    equipamentos.map((equipamento) => (
                        <CardEquipamento
                            key={equipamento.id} 
                            id={equipamento.id}
                            categoria={equipamento.categoria}
                            marca={equipamento.marca}
                            modelo={equipamento.modelo}
                            processador={equipamento.processador}
                            memoria={equipamento.memoria}
                            disco={equipamento.disco}
                            quantidade={equipamento.quantidade}
                            imagem={equipamento.imagem}
                            imagemTexto={equipamento.modelo}
                            state={{ id: equipamento.id }} 
                            rota={"/equipamentos/editar"}
                            click={() => excluiEquipamento(equipamento.id)} 
                        />
                    ))
                ) : (
                    <h1>Carregando equipamentos...</h1>
                )}
            </section>
        
    );
}

export default Equipamento;
