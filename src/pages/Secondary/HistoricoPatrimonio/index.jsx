import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardHistorico from "../../../components/Others/CardHistorico";
import styles from "./HistoricoPatrimonio.module.css";

function HistoricoPatrimonio() {
    const { patrimonio_id } = useParams(); 
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/historico/patrimonio/${patrimonio_id}`)
            .then((response) => response.json())
            .then((data) =>{ 
                const historicoArray = Array.isArray(data) ? data : [data];
                setHistorico(historicoArray)})
            .catch((error) => console.error(`Erro ao buscar históricos: ${error}`));
    }, []);

    return (
        <section className={styles.historicoPatrimonio}>
            <h1>Histórico do patrimônio</h1>
            {historico.length > 0 ? (
                historico.map((item) => (
                    <CardHistorico
                        key={item.id}
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
