import styles from "./CardEquipamento.module.css";

function CardEquipamento({ 
    categoria, 
    marca, 
    modelo, 
    processador, 
    memoria, 
    disco, 
    quantidade, 
    editando, 
    quantidadeEditada, 
    setQuantidadeEditada, 
    onEditar, 
    onSalvar 
}) {
    return (
        <section className={styles.cardEquipamento}>
            <div className={styles.descricao}>{categoria}</div>
            <div className={styles.descricao}>{marca}</div>
            <div className={styles.descricao}>{modelo}</div>
            <div className={styles.descricao}>{processador}</div>
            <div className={styles.descricao}>{memoria}</div>
            <div className={styles.descricao}>{disco}</div>
            <div className={styles.descricao}>
                {editando ? (
                    <input
                        type="number"
                        value={quantidadeEditada}
                        onChange={(e) => setQuantidadeEditada(e.target.value)}
                        className={styles.inputQuantidade}
                    />
                ) : (
                    quantidade
                )}
            </div>
            {editando ? (
                <button className={styles.botao} onClick={onSalvar}>
                    Salvar
                </button>
            ) : (
                <button className={styles.botao} onClick={onEditar}>
                    Editar
                </button>
            )}
        </section>
    );
}

export default CardEquipamento;
