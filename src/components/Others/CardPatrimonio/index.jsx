import { Link } from "react-router-dom";
import styles from "./CardPatrimonio.module.css"

function CardPatrimonio ({ patrimonio, local, obs ,categoria, marca, modelo, processador, memoria, disco, rotaPatrimonio, rotaHistorico, state, empresa}) {

    return (

        <section className={styles.cardPatrimonio}>
            <div className={styles.listagem}> 
                <div className={styles.patrimonios}>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Patrimonio:</h1>
                        <h2 className={styles.textoCampo}>{patrimonio}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Local:</h1>
                        <h2 className={styles.textoCampo}>{local}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Empresa:</h1>
                        <h2 className={styles.textoCampo}>{empresa}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>OBS:</h1>
                        <h2 className={styles.textoCampo}>{obs}</h2>
                    </div>
                </div>
                <div className={styles.equipamentos}>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Categoria:</h1>
                        <h2 className={styles.textoCampo}>{categoria}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Marca:</h1>
                        <h2 className={styles.textoCampo}>{marca}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Modelo:</h1>
                        <h2 className={styles.textoCampo}>{modelo}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Processador:</h1>
                        <h2 className={styles.textoCampo}>{processador}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Memória:</h1>
                        <h2 className={styles.textoCampo}>{memoria}</h2>
                    </div>
                    <div className={styles.descricao}>
                        <h1 className={styles.texto}>Disco:</h1>
                        <h2 className={styles.textoCampo}>{disco}</h2>
                    </div>
                </div>   
            </div>
                <div className={styles.botoes}>
                    <Link className={styles.botao} state={state} to={rotaPatrimonio}>Editar patrimônio</Link>  
                    <Link className={styles.botao} state={state} to={rotaHistorico}>Histórico</Link>  
                </div>            
        </section>
        
    )

};


export default CardPatrimonio;