import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  
import CardHistorico from "../../../components/Others/CardHistorico";
import styles from "./HistoricoPatrimonio.module.css";

function HistoricoPatrimonio() {
    const { patrimonio_id } = useParams(); 
    const [historico, setHistorico] = useState([]);
    const [patrimonio, setPatrimonio] = useState(null); 

    useEffect(() => {
        fetch(`http://localhost:5000/historico/patrimonio/${patrimonio_id}`)
            .then((response) => response.json())
            .then((data) => { 
                const historicoArray = Array.isArray(data) ? data : [data];
                setHistorico(historicoArray);
            })
            .catch((error) => console.error(`Erro ao buscar históricos: ${error}`));

        fetch(`http://localhost:5000/patrimonios/${patrimonio_id}`)
            .then((response) => response.json())
            .then((data) => {
                setPatrimonio(data.patrimonio); 
            })
            .catch((error) => console.error(`Erro ao buscar patrimônio: ${error}`));
    }, [patrimonio_id]);

    return (
        <section className={styles.historicoPatrimonio}>
            <h1>Histórico do patrimônio</h1>
            {historico.length > 0 ? (
                historico.map((item) => (
                    <CardHistorico
                        key={item.id}
                        patrimonio={patrimonio} // Passa o nome do patrimônio
                        saida={item.saida}
                        entrada={item.entrada}
                        data={item.data}
                    />
                ))
            ) : (
                <h1 className={styles.textoErro}>Sem histórico</h1>
            )}
        </section>
    );
}

export default HistoricoPatrimonio;
