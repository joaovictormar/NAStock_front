import { Link } from "react-router-dom";
import styles from "./CardPatrimonio.module.css";

function CardPatrimonio({ 
    patrimonio, local, empresa, obs, 
    categoria, marca, modelo, processador, 
    memoria, disco, rotaPatrimonio, rotaHistorico, state 
}) {
    return (
        <section className={styles.cardPatrimonio}>
            <div className={styles.descricao}>{patrimonio}</div>
            <div className={styles.descricao}>{local}</div>
            <div className={styles.descricao}>{empresa}</div>
            <div className={styles.descricao}>{obs}</div>
            <div className={styles.descricao}>{categoria}</div>
            <div className={styles.descricao}>{marca}</div>
            <div className={styles.descricao}>{modelo}</div>
            <div className={styles.descricao}>{processador}</div>
            <div className={styles.descricao}>{memoria}</div>
            <div className={styles.descricao}>{disco}</div>
            
            <div className={styles.botoes}>
                <Link className={styles.botao} state={state} to={rotaPatrimonio}>Editar</Link>
                <Link className={styles.botao} state={state} to={rotaHistorico}>Histórico</Link>
            </div>
        </section>
    );
}

export default CardPatrimonio;
