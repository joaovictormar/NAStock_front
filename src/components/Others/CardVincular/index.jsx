import styles from "./CardVincular.module.css";

function CardVincular({
    equipamentos,
    modeloSelecionado,
    setModeloSelecionado,
    patrimonio,
    setPatrimonio,
    local,
    setLocal,
    obs,
    setObs,
    criaPatrimonio
}) {
    return (
            <div className={styles.cardVincular}>
                <select
                className={styles.selecao}
                value={modeloSelecionado}
                onChange={(e) => setModeloSelecionado(e.target.value)}
                required>
                    <option className={styles.opcao} value="" disabled>Selecione um modelo</option>
                    {equipamentos.map((equipamento) => (
                    <option className={styles.opcao} key={equipamento.id} value={equipamento.modelo}>
                    {equipamento.modelo}
                    </option>))}
                </select>
                <form className={styles.cardPrincipal} onSubmit={criaPatrimonio}>
                    <div className={styles.formularios}>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>Patrimônio:</label>
                            <input
                                onChange={(e) => setPatrimonio(e.target.value)}
                                value={patrimonio}
                                className={styles.campo}
                                type="text"
                                required
                            />
                        </div>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>Local:</label>
                            <select
                                onChange={(e) => setLocal(e.target.value)}
                                value={local}
                                className={styles.campo}
                                required>
                                    <option className={styles.opcao} value="" disabled>Selecione um local</option>
                                    <option className={styles.opcao} value="Locação">Locação</option>
                                    <option className={styles.opcao} value="Estoque">Estoque</option>
                            </select>
                        </div>
                        <div className={styles.formulario}>
                            <label className={styles.texto}>OBS:</label>
                            <input
                                onChange={(e) => setObs(e.target.value)}
                                value={obs}
                                className={styles.campo}
                                type="text"
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.botao}>
                        Vincular Patrimônio
                    </button>
                </form>
            </div>
    );
}

export default CardVincular;
