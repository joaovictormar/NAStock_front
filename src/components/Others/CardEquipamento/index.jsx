import styles from "./CardEquipamento.module.css";

function CardEquipamento ({categoria, marca, modelo, processador, memoria, disco, quantidade}) {
    
    return (
            <section className={styles.cardEquipamento}>
                    <div className={styles.descricao}>{categoria}</div>
                    <div className={styles.descricao}>{marca}</div>
                    <div className={styles.descricao}>{modelo}</div>
                    <div className={styles.descricao}>{processador}</div>
                    <div className={styles.descricao}>{memoria}</div>
                    <div className={styles.descricao}>{disco}</div>
                    <div className={styles.descricao}>{quantidade}</div>   
            </section>
    );
};

export default CardEquipamento;