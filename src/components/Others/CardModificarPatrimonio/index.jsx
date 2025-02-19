import styles from "./CardModificarPatrimonio.module.css"

function CardMoficarPatrimonio() {

    return (
        <section className={styles.cardMoficarPatrimonio}>
            <form className={styles.formularios}>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Patrimônio:</label>
                    <input className={styles.campo} type="text" required></input>
                </div>
                <div className={styles.select}>
                    <h1 className={styles.texto}>Local:</h1>
                    <select className={styles.selecao} required>
                        <option className={styles.opcao} disabled >Selecione um modelo</option>
                        <option className={styles.opcao} >Locação:</option>
                        <option className={styles.opcao} >Estoque:</option>
                    </select>
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>OBS:</label>
                    <input className={styles.campo} type="text"></input>
                </div>
                <button type="submit" className={styles.botao}>Editar patrimonio</button>
            </form>
        </section>
    )

};

export default CardMoficarPatrimonio;