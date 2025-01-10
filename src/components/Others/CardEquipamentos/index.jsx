import styles from "./CardEquipamentos.module.css";

function CardEquipamentos ({imagem, categoria, marca, modelo, processador, memoria, disco, quantidade, imagemTexto}) {

    return (
            <figure className={styles.cardEquipamentos}>
                <ul className={styles.propriedades}>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Categoria -</h1>
                        <h2 className={styles.texto}>{categoria}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Marca -</h1>
                        <h2 className={styles.texto}>{marca}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Modelo -</h1>
                        <h2 className={styles.texto}>{modelo}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Processador -</h1>
                        <h2 className={styles.texto}>{processador}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Memoria -</h1>
                        <h2 className={styles.texto}>{memoria}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Disco -</h1>
                        <h2 className={styles.texto}>{disco}</h2>
                    </li>
                    <li className={styles.textoPropriedade}>
                        <h1 className={styles.texto}>Quantidade -</h1>
                        <h2 className={styles.texto}>{quantidade}</h2>
                    </li>
                </ul>
                <div className={styles.edicao}>
                    <img className={styles.imagem} src={imagem} alt={imagemTexto}/>
                    <div className={styles.botoes}>
                        <button className={styles.botao}>Editar</button>
                        <button className={styles.botao}>Excluir</button>               
                    </div>
                </div>
            </figure>
    )

};

export default CardEquipamentos;


