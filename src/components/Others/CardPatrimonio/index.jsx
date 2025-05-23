import { Link } from "react-router-dom";
import styles from "./CardPatrimonio.module.css";

function CardPatrimonio({ 
    patrimonio, local, empresa, obs, 
    categoria, marca, modelo, processador, 
    memoria, disco, rotaPatrimonio, rotaHistorico, state, 
    editando, memoriaEditada, discoEditado, onEditar, onSalvar, setMemoriaEditada, setDiscoEditado, garantia, serial,
    mostrarMaisInfo, onToggleMaisInfo
}) {
    return (
        <section className={styles.cardPatrimonio}>
            <div className={styles.cardPatrimonioSuperior}>
                <div className={styles.descricao}>{patrimonio}</div>
                <div className={styles.descricao}>{local}</div>
                <div className={styles.descricao}>{empresa}</div>
                <div className={styles.descricao}>{obs}</div>
                <div className={styles.descricao}>{categoria}</div>
                <div className={styles.descricao}>{marca}</div>
                <div className={styles.descricao}>{modelo}</div>
                <div className={styles.descricao}>{processador}</div>
                <div className={styles.descricao}>
                    {editando ? (
                        <input
                            type="text"
                            value={memoriaEditada}
                            onChange={(e) => setMemoriaEditada(e.target.value)}
                            className={styles.inputEdicao}
                        />
                    ) : (
                        memoria
                    )}
                </div>
                <div className={styles.descricao}>
                    {editando ? (
                        <input
                            type="text"
                            value={discoEditado}
                            onChange={(e) => setDiscoEditado(e.target.value)}
                            className={styles.inputEdicao}
                        />
                    ) : (
                        disco
                    )}
                </div>
                <div className={styles.botoes}>
                    <div className={styles.botoesSuperior}>
                        {editando ? (
                            <button className={styles.botao} onClick={onSalvar}>Salvar</button>
                        ) : (
                            <button className={styles.botao} onClick={onEditar}>Editar</button>
                        )}
                        <Link className={styles.botao} state={state} to={rotaHistorico}>Histórico</Link>
                    </div>             
                    <Link className={styles.botao}  state={state} to={rotaPatrimonio}>Alugar ou Devolver</Link>
                </div>
            </div>
            <div className={styles.cardPatrimonioInferior}>
                <button onClick={onToggleMaisInfo} className={styles.botaoInfo}>Mais informações</button>
                {mostrarMaisInfo && (
                    <div className={styles.maisInformacoes}>
                        <div className={styles.informacoesTexto}>Garantia: {garantia || "Não informado"}</div>
                        <div className={styles.informacoesTexto}>Serial Number: {serial || "Não informado"}</div>
                    </div>
                )}
            </div>
        </section>
    ); 
}

export default CardPatrimonio;
