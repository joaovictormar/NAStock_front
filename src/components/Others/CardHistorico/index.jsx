import styles from "./CardHistorico.module.css";

function CardHistorico ({patrimonio, saida, entrada, data, motivo, alteracao}) {

    return (
            <section className={styles.cardHistorico}>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Patrimônio</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{patrimonio}</h1>
                </div>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Saida</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{saida}</h1>
                </div>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Entrada</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{entrada}</h1>
                </div>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Data</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{data}</h1>
                </div>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Motivo</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{motivo}</h1>
                </div>
                <div className={styles.textos}>
                    <h1 className={styles.texto}>Alteração</h1>
                    <hr/>
                    <h1 className={styles.propriedade}>{alteracao}</h1>
                </div>
            </section>
    )

};

export default CardHistorico;