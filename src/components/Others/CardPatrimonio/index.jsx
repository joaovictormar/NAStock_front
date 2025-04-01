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
                        <Link className={styles.botao}  state={state} to={rotaPatrimonio}>Editar</Link>
                        <button className={styles.botao}>Alugar </button>
                    </div>       
                    <Link className={styles.botao} state={state} to={rotaHistorico}>Histórico</Link>
                </div>
            </div>
        </section>
    );
}

export default CardPatrimonio;
