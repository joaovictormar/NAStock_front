import styles from "./EstoquePatrimonio.module.css";
import { useState, useEffect } from "react";
import CardPatrimonio from "../../../components/Others/CardPatrimonio";
import Search from "../../../components/Others/Search";

function Estoque() {
    const [mensagem, setMensagem] = useState("");  
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentosQueTemLocalEstoque, setEquipamentosQueTemLocalEstoque] = useState([]);
    const [dadosCombinados, setDadosCombinados] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios/estoque")
            .then((response) => response.json())
            .then((data) => {
                setPatrimonios(data);
            })
            .catch((error) => console.log(`Erro ao buscar patrimônios no estoque: ${error}`));
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
                setEquipamentosQueTemLocalEstoque(equipamentos);
            } catch (error) {
                console.log(`Erro ao buscar equipamentos no estoque: ${error}`);
            }
        };

        if (patrimonios.length > 0) {
            buscaEquipamentos();
        }
    }, [patrimonios]);

    useEffect(() => {
        const dadosCombinados = patrimonios.map((patrimonio) => {
            const equipamento = equipamentosQueTemLocalEstoque.find(
                (equip) => equip.id === patrimonio.equipamento_id
            );
            return {
                ...equipamento,
                ...patrimonio,
            };
        });

        setDadosCombinados(dadosCombinados);
        setDadosFiltrados(dadosCombinados);
    }, [patrimonios, equipamentosQueTemLocalEstoque]);

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
        <section className={styles.estoquePatrimonio}>
            <Search onSearch={buscaDinamica} />
            <div className={styles.estoque}>
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
                            disco={dados.disco}
                            quantidade={dados.quantidade}
                            patrimonio={dados.patrimonio}
                            local={dados.local}
                            empresa={dados.empresa}
                            obs={dados.obs}
                            state={ {id: dados.id} }
                            rotaPatrimonio={`/patrimonios/editar`}
                            click={() => excluiPatrimonio(dados.id)}  
                        />
                    ))
                ) : (
                    <h1 className={styles.textoErro}>Sem patrimônios no estoque</h1>
                )}
            </div>
        </section>
    );
}

export default Estoque;
