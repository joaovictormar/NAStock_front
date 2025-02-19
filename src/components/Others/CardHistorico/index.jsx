import styles from "./CardHistorico.module.css";

function CardHistorico ({saida, entrada, data}) {

    return (
        <div className={styles.cardHistorico}>
                <ul className={styles.propriedades}>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Saída:</h1>
                        <h2 className={styles.texto}>{saida}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Entrada:</h1>
                        <h2 className={styles.texto}>{entrada}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Data:</h1>
                        <h2 className={styles.texto}>{data}</h2>
                    </li>
                </ul>        
        </div>
    )

};

export default CardHistorico;