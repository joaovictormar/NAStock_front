import CardCliente from "../../components/Others/CardCliente";
import styles from "./Cliente.module.css";

function Cliente () {
    return (
        <section className={styles.cliente}>
            <div className={styles.descricao}>
                <h1 className={styles.textoDescricao}>Cliente</h1>
                <h1 className={styles.textoDescricao}>Patrimônios</h1>
                <h1 className={styles.textoDescricao}>Equipamentos locados</h1>
                <h1 className={styles.textoDescricao}>Total</h1>
            </div>
            <CardCliente/>
        </section>
    )
};

export default Cliente;