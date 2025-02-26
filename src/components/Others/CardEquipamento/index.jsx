import styles from "./CardEquipamento.module.css";

function CardEquipamento ({categoria, marca, modelo, processador, memoria, disco, quantidade}) {
    

    return (
            <div className={styles.cardEquipamento}>
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
            </div>
    );
};

export default CardEquipamento;