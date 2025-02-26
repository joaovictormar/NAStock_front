import { useEffect, useState } from "react";
import CardHistorico from "../../components/Others/CardHistorico";
import styles from "./Historico.module.css";

function Historico() {
    const [historicos, setHistoricos] = useState([]);
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const fetchHistoricos = async () => {
            try {
                const response = await fetch("http://localhost:5000/historico"); 
                if (response.ok) {
                    const data = await response.json();
                    const historicosComPatrimonio = await Promise.all(
                        data.map(async (item) => {
                            const patrimonioResponse = await fetch(`http://localhost:5000/patrimonios/${item.patrimonio_id}`);
                            const patrimonioData = await patrimonioResponse.json();

                            return {
                                ...item,  
                                patrimonioNumero: patrimonioData.patrimonio || "Número não encontrado",  
                            };
                        })
                    );
                    setHistoricos(historicosComPatrimonio);  
                } else {
                    setMensagem("Sem históricos.");
                    console.error("Erro ao buscar históricos.");
                }
            } catch (error) {
                setMensagem("Erro ao conectar com a API");
                console.error("Erro ao conectar com a API:", error);
            }
        };
        fetchHistoricos(); 
    }, []); 

    return (
        <section className={styles.historico}>
            <h1>Histórico de alterações</h1>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            {historicos.length > 0 ? (
                historicos.map((item) => (
                    <CardHistorico
                        key={item.id}  
                        patrimonio={item.patrimonioNumero} 
                        saida={item.saida}
                        entrada={item.entrada}
                        data={item.data}  
                    />
                ))
            ) : (
                <h1 className={styles.textoErro}>Não há históricos registrados.</h1>
            )}
        </section>
    );
}

export default Historico;
