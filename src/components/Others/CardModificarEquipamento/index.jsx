import styles from "./CardModificarEquipamento.module.css";

function CardModificarEquipamento({
    categoria,
    setCategoria,
    marca,
    setMarca,
    modelo,
    setModelo,
    processador,
    setProcessador,
    memoria,
    setMemoria,
    disco,
    setDisco,
    quantidade,
    setQuantidade,
    enviarFormulario
}) {
    return (
            <form className={styles.cardModificarEquipamento} onSubmit={enviarFormulario}>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Categoria:</label>
                    <input onChange={(e) => setCategoria(e.target.value)} value={categoria} className={styles.input} type="text" required />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Marca:</label>
                    <input onChange={(e) => setMarca(e.target.value)} value={marca} className={styles.input} type="text" required />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Modelo:</label>
                    <input onChange={(e) => setModelo(e.target.value)} value={modelo} className={styles.input} type="text" required />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Processador:</label>
                    <input onChange={(e) => setProcessador(e.target.value)} value={processador} className={styles.input} type="text" />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Memória:</label>
                    <input onChange={(e) => setMemoria(e.target.value)} value={memoria} className={styles.input} type="text" />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Disco:</label>
                    <input onChange={(e) => setDisco(e.target.value)} value={disco} className={styles.input} type="text" />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Quantidade:</label>
                    <input onChange={(e) => setQuantidade(e.target.value)} value={quantidade} className={styles.input} type="number" required />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Imagem:</label>
                    <input className={styles.inputImagem} type="file" />
                </div>
                <button className={styles.botao} type="submit">Enviar</button>
            </form>
    );
}

export default CardModificarEquipamento;