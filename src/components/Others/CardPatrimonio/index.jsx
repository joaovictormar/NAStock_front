import styles from "./CardPatrimonio.module.css"

function CardPatrimonio ({imagem, equipamento_id, patrimonio, local, obs, imagemTexto ,categoria, marca, modelo, processador, memoria, disco, quantidade}) {

    return (

        <section className={styles.cardPatrimonio}>
            <div className={styles.equipamentos}>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Categoria:</h1>
                    <h2 className={styles.texto}>{categoria}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Marca:</h1>
                    <h2 className={styles.texto}>{marca}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Modelo:</h1>
                    <h2 className={styles.texto}>{modelo}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Processador:</h1>
                    <h2 className={styles.texto}>{processador}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Memória:</h1>
                    <h2 className={styles.texto}>{memoria}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Disco:</h1>
                    <h2 className={styles.texto}>{disco}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Quantidade:</h1>
                    <h2 className={styles.texto}>{quantidade}</h2>
                </div>
            </div>    


            <img src={imagem} alt={imagemTexto}></img>
            
            <div className={styles.patrimonios}>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Patrimonio:</h1>
                    <h2 className={styles.texto}>{patrimonio}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>Local:</h1>
                    <h2 className={styles.texto}>{local}</h2>
                </div>
                <div className={styles.descricao}>
                    <h1 className={styles.texto}>OBS:</h1>
                    <h2 className={styles.texto}>{obs}</h2>
                </div>
                <button className={styles.botao} oncl>Apagar patrimônio</button>    
            </div>            
        </section>
        
    )

};


export default CardPatrimonio;