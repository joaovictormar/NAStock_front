import styles from "./CardModificarPatrimonio.module.css";

function CardModificarPatrimonio({
    patrimonio, 
    setLocal, 
    local, 
    setObs, 
    obs,
    setMotivo,   
    motivo,      
    enviarFormulario
}) {
    return (
        <section className={styles.cardMoficarPatrimonio}>
            <form className={styles.formularios} onSubmit={enviarFormulario}>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Patrimônio:</label>
                    <label className={styles.texto}>{patrimonio}</label>
                </div>
                <div className={styles.select}>
                    <h1 className={styles.texto}>Local:</h1>
                    <select className={styles.selecao} onChange={(e) => setLocal(e.target.value)} value={local} required>
                        <option className={styles.opcao} value="" disabled >Selecione um modelo</option>
                        <option className={styles.opcao} value="Locação">Locação</option>
                        <option className={styles.opcao} value="Estoque">Estoque</option>
                    </select>
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>OBS:</label>
                    <input onChange={(e) => setObs(e.target.value)} value={obs} className={styles.campo} type="text" />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Motivo da edição:</label>
                    <input onChange={(e) => setMotivo(e.target.value)} value={motivo} className={styles.campo} type="text" required />
                </div>
                <button type="submit" className={styles.botao}>Editar patrimônio</button>
            </form>
        </section>
    );
}

export default CardModificarPatrimonio;
