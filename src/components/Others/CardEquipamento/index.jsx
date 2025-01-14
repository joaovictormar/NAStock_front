import { useState } from "react";
import styles from "./CardEquipamento.module.css";
import { Link } from "react-router-dom";

function CardEquipamento ({id, imagem, categoria, marca, modelo, processador, memoria, disco, quantidade, imagemTexto}) {
    

    const [mensagem, setMensagem] = useState('');
    const excluiEquipamento = async () => {
        try {
            const response = await fetch(`http://localhost:5000/equipamentos/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                setMensagem("Equipamento excluído com sucesso");
                console.log("Exclusão concluída para o item com ID:", id);

                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            } else {
                setMensagem("Erro ao excluir equipamento")
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            setMensagem("Erro ao conectar com a API")
            console.error("Erro ao conectar com a API:", error);
        }
    };

    return (
        <>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}   
            <figure className={styles.cardEquipamento}>
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
                        <Link to="/editarequipamento" className={styles.botao} state={{id:id}}>Editar</Link>
                        <button className={styles.botao} onClick={excluiEquipamento}>Excluir</button>            
                    </div>
                </div>
            </figure>
            </>
    );
};

export default CardEquipamento;