import styles from "./CardAddEquipamentos.module.css"

function CardAddEquipamentos () {

    return (
        <form className={styles.cardAddEquipamentos}>
            <div className={styles.formulario}>
                <label className={styles.texto}>Categoria:</label>
                <input className={styles.input} type="text" required></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Marca:</label>
                <input className={styles.input} type="text" required></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Modelo:</label>
                <input className={styles.input} type="text" required></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Processador:</label>
                <input className={styles.input} type="text"></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Memória:</label>
                <input className={styles.input} type="text"></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Disco:</label>
                <input className={styles.input} type="text"></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Quantidade:</label>
                <input className={styles.input} type="text" required></input>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Imagem:</label>
                <input className={styles.inputImagem} type="file" ></input>
            </div>
            <button className={styles.botao} type="submit">Enviar</button>
        </form>
    )

};

export default CardAddEquipamentos;