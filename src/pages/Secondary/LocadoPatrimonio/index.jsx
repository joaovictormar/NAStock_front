import styles from "./LocadoPatrimonio.module.css";
import { useState, useEffect } from "react";
import CardPatrimonio from "../../../components/Others/CardPatrimonio";
import Search from "../../../components/Others/Search";

function Locado() {
    const [mensagem, setMensagem] = useState("");  
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentosQueTemLocalLocado, setEquipamentosQueTemLocalLocado] = useState([]);
    const [dadosCombinados, setDadosCombinados] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios/locacao")
            .then((response) => response.json())
            .then((data) => {
                setPatrimonios(data);
            })
            .catch((error) => console.log(`Erro ao buscar patrimônios locados: ${error}`));
    }, []);

    useEffect(() => {
        const buscaEquipamentos = async () => {
            try {
                const equipamentos = await Promise.all(
                    patrimonios.map((patrimonio) =>
                        fetch(`http://localhost:5000/equipamentos/${patrimonio.equipamento_id}`)
                            .then((res) => res.json())
                    )
                );
                setEquipamentosQueTemLocalLocado(equipamentos);
            } catch (error) {
                console.log(`Erro ao buscar equipamentos locados: ${error}`);
            }
        };

        if (patrimonios.length > 0) {
            buscaEquipamentos();
        }
    }, [patrimonios]);

    useEffect(() => {
        const dadosCombinados = patrimonios.map((patrimonio) => {
            const equipamento = equipamentosQueTemLocalLocado.find(
                (equip) => equip.id === patrimonio.equipamento_id
            );
            return {
                ...equipamento,
                ...patrimonio,
            };
        });

        setDadosCombinados(dadosCombinados);
        setDadosFiltrados(dadosCombinados);
    }, [patrimonios, equipamentosQueTemLocalLocado]);

    const excluiPatrimonio = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setMensagem("Patrimônio excluído com sucesso");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMensagem("Erro ao excluir patrimônio");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
        }
    };

    const buscaDinamica = (query) => {
        if (!query) {
            setDadosFiltrados(dadosCombinados);
        } else {
            const filtrados = dadosCombinados.filter((dados) =>
                Object.values(dados).some((value) =>
                    value?.toString().toLowerCase().includes(query.toLowerCase())
                )
            );
            setDadosFiltrados(filtrados);
        }
    };

    return (
            <section className={styles.locadoPatrimonio}>
                <Search onSearch={buscaDinamica} />
                <div className={styles.locado}>
                    <div className={styles.descricao}>
                        <h1 className={styles.textoDescricao}>Patrimônio</h1>
                        <h1 className={styles.textoDescricao}>Local</h1>
                        <h1 className={styles.textoDescricao}>Empresa</h1>
                        <h1 className={styles.textoDescricao}>OBS</h1>
                        <h1 className={styles.textoDescricao}>Categoria</h1>
                        <h1 className={styles.textoDescricao}>Marca</h1>
                        <h1 className={styles.textoDescricao}>Modelo</h1>
                        <h1 className={styles.textoDescricao}>Processador</h1>
                        <h1 className={styles.textoDescricao}>Memória</h1>
                        <h1 className={styles.textoDescricao}>Disco</h1>
                    </div>
                    {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}  
                    {dadosFiltrados.length > 0 ? (
                        dadosFiltrados.map((dados) => (
                            <CardPatrimonio
                                key={dados.id}
                                categoria={dados.categoria}
                                marca={dados.marca}
                                modelo={dados.modelo}
                                processador={dados.processador}
                                memoria={dados.memoria}
                                empresa={dados.empresa}
                                disco={dados.disco}
                                quantidade={dados.quantidade}
                                patrimonio={dados.patrimonio}
                                local={dados.local}
                                obs={dados.obs}
                                state={ {id: dados.id} }
                                rotaPatrimonio={`/patrimonios/editar`}
                                click={() => excluiPatrimonio(dados.id)}  
                            />
                        ))
                    ) : (
                        <h1 className={styles.textoErro}>Sem patrimônios locados</h1>
                    )}
                </div>
            </section>
    );
}

export default Locado;
