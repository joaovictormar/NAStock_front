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
                <select
                className={styles.selecao}
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
                required>
                    <option className={styles.opcao} value="" disabled>Selecione uma categoria</option>
                    <option className={styles.opcao} value="Desktop">Desktop</option>
                    <option className={styles.opcao} value="Notebook">Notebook</option>
                    <option className={styles.opcao} value="Monitor">Monitor</option>
                    <option className={styles.opcao} value="Telefone IP">Telefone IP</option>
                    <option className={styles.opcao} value="Servidor">Servidor</option>
                    <option className={styles.opcao} value="Firewall">Firewall</option>
                </select>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Marca:</label>
                <select
                className={styles.selecao}
                onChange={(e) => setMarca(e.target.value)}
                value={marca}
                required
                >
                    <option className={styles.opcao} value="" disabled>Selecione uma marca</option>
                    <option className={styles.opcao} value="Dell">Dell</option>
                    <option className={styles.opcao} value="HP">HP</option>
                    <option className={styles.opcao} value="Lenovo">Lenovo</option>
                    <option className={styles.opcao} value="AOC">AOC</option>
                    <option className={styles.opcao} value="Samsung">Samsung</option>
                </select>
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
                <select className={styles.selecao} 
                onChange={(e) => setMemoria(e.target.value)} 
                value={memoria} 
                >
                    <option className={styles.opcao} value="" disabled>Selecione uma memória</option>
                    <option className={styles.opcao} value="4GB DDR3">4GB DDR3</option>
                    <option className={styles.opcao} value="8GB DDR3">8GB DDR3</option>
                    <option className={styles.opcao} value="16GB DDR3">16GB DDR3</option>
                    <option className={styles.opcao} value="32GB DDR3">32GB DDR3</option>
                    <option className={styles.opcao} value="64GB DDR3">64GB DDR3</option>
                    <option className={styles.opcao} value="4GB DDR4">4GB DDR4</option>
                    <option className={styles.opcao} value="8GB DDR4">8GB DDR4</option>
                    <option className={styles.opcao} value="16GB DDR4">16GB DDR4</option>
                    <option className={styles.opcao} value="32GB DDR4">32GB DDR4</option>
                    <option className={styles.opcao} value="64GB DDR4">64GB DDR4</option>
                </select>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Disco:</label>
                <select className={styles.selecao}
                onChange={(e) => setDisco(e.target.value)} 
                value={disco}>
                    <option className={styles.opcao} value="" disabled>Selecione um disco</option>
                    <option className={styles.opcao} value="500GB HD">500GB HD</option>
                    <option className={styles.opcao} value="1TB HD">1TB HD</option>
                    <option className={styles.opcao} value="2TB HD">2TB HD</option>
                    <option className={styles.opcao} value="4TB HD">4TB HD</option>
                    <option className={styles.opcao} value="10TB HD">10TB HD</option>
                    <option className={styles.opcao} value="120GB SSD">120GB SSD</option>
                    <option className={styles.opcao} value="240GB SSD">240GB SSD</option>
                    <option className={styles.opcao} value="480GB SSD">480GB SSD</option>
                    <option className={styles.opcao} value="500GB HD + 120GB SSD">500GB HD + 120GB SSD</option>
                    <option className={styles.opcao} value="500GB HD + 240GB SSD">500GB HD + 240GB SSD</option>
                    <option className={styles.opcao} value="500GB HD + 480GB SSD">500GB HD + 480GB SSD</option>
                    <option className={styles.opcao} value="1TB HD + 120GB SSD">1TB HD + 120GB SSD</option>
                    <option className={styles.opcao} value="1TB HD + 240GB SSD">1TB HD + 240GB SSD</option>
                    <option className={styles.opcao} value="1TB HD + 480GB SSD">1TB HD + 480GB SSD</option>
                    <option className={styles.opcao} value="2TB HD + 120GB SSD">2TB HD + 120GB SSD</option>
                    <option className={styles.opcao} value="2TB HD + 240GB SSD">2TB HD + 240GB SSD</option>
                    <option className={styles.opcao} value="2TB HD + 480GB SSD">2TB HD + 480GB SSD</option>
                    <option className={styles.opcao} value="4TB HD + 120GB SSD">4TB HD + 120GB SSD</option>
                    <option className={styles.opcao} value="4TB HD + 240GB SSD">4TB HD + 240GB SSD</option>
                    <option className={styles.opcao} value="4TB HD + 480GB SSD">4TB HD + 480GB SSD</option>
                    <option className={styles.opcao} value="10TB HD + 120GB SSD">10TB HD + 120GB SSD</option>
                    <option className={styles.opcao} value="10TB HD + 240GB SSD">10TB HD + 240GB SSD</option>
                    <option className={styles.opcao} value="10TB HD + 480GB SSD">10TB HD + 480GB SSD</option>
                </select>
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Quantidade:</label>
                <input onChange={(e) => setQuantidade(e.target.value)} value={quantidade} className={styles.input} type="number" required />
            </div>
            <button className={styles.botao} type="submit">Enviar</button>
        </form>
    );
}

export default CardModificarEquipamento;
