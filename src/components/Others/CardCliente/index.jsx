import styles from "./CardCliente.module.css";

function CardCliente ({cliente, patrimonios, equipamentos, total}) {

    return (
        <div className={styles.cardCliente}>
            <div className={styles.descricao}>{cliente}</div>
            <div className={styles.descricao}>{patrimonios}</div>
            <div className={styles.descricao}>{equipamentos}</div>
            <div className={styles.descricao}>{total}</div>
        </div>
    )

}

export default CardCliente;