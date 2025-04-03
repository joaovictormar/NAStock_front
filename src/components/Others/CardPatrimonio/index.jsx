import { Link } from "react-router-dom";
import styles from "./CardPatrimonio.module.css";

function CardPatrimonio({ 
    patrimonio, local, empresa, obs, 
    categoria, marca, modelo, processador, 
    memoria, disco, rotaPatrimonio, rotaHistorico, state 
}) {
    return (
        <section>
            <div className={styles.cardPatrimonio}>
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
                    <div className={styles.botoesSuperior}>
                        <button className={styles.botao}>Editar </button>
                        <Link className={styles.botao} state={state} to={rotaHistorico}>Histórico</Link>
                    </div>             
                    <Link className={styles.botao}  state={state} to={rotaPatrimonio}>Alugar ou Devolver</Link>
                </div>
            </div>
        </section>
    );
}

export default CardPatrimonio;
