import { Link } from "react-router-dom";
import CardPatrimonio from "../../components/Others/CardPatrimonio";
import Search from "../../components/Others/Search";
import styles from "./Patrimonio.module.css";
import { useState, useEffect } from "react";

function Patrimonio() {
    const [mensagem, setMensagem] = useState("");
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentosQueTemPatrimonio, setEquipamentosQueTemPatrimonio] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios")
            .then((response) => response.json())
            .then((data) => setPatrimonios(data))
            .catch((error) => console.log(`Erro ao buscar patrimônios: ${error}`));
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
                setEquipamentosQueTemPatrimonio(equipamentos);
            } catch (error) {
                console.log(`Erro ao buscar equipamentos: ${error}`);
            }
        };

        if (patrimonios.length > 0) {
            buscaEquipamentos();
        }
    }, [patrimonios]);

    const excluiPatrimonio = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setMensagem("Patrimônio excluído com sucesso");
                console.log("Exclusão concluída para o item com ID:", id);

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMensagem("Erro ao excluir patrimônio");
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
        }
    };

    const dadosCombinados = patrimonios.map((patrimonio) => {
        const equipamento = equipamentosQueTemPatrimonio.find(
            (equip) => equip.id === patrimonio.equipamento_id
        );
        return {
            ...equipamento,
            ...patrimonio,
        };
    });

    return (
        <section className={styles.patrimonio}>
            <div className={styles.patrimonioSuperior}>
                <Search />
                <div className={styles.links}>
                    <Link className={styles.link}>Patrimônios Locados</Link>
                    <Link to="/patrimonios/estoque" className={styles.link}>Patrimônios no Estoque</Link>
                </div>
            </div>
            <div className={styles.card}>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            {dadosCombinados.length > 0 ?            
            dadosCombinados.map((dados) => (
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
                    obs={dados.obs}
                    imagem={dados.imagem}
                    click={() => excluiPatrimonio(dados.id)}
                />
            )) : (
                <h1 className={styles.textoErro}>Sem patrimônios cadastrados</h1>
            )}
            </div>
        </section>
    );
}

export default Patrimonio;
