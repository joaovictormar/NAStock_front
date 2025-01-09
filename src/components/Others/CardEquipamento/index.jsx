import styles from "./CardEquipamento.module.css";

function CardEquipamento ({imagem, categoria, marca, modelo, processador, memoria, disco, quantidade, imagemTexto}) {

    return (
            <figure className={styles.CardEquipamento}>
                <ul className={styles.propriedades}>
                    <li className={styles.textoPropriedade}>{categoria}</li>
                    <li className={styles.textoPropriedade}>{marca}</li>
                    <li className={styles.textoPropriedade}>{modelo}</li>
                    <li className={styles.textoPropriedade}>{processador}</li>
                    <li className={styles.textoPropriedade}>{memoria}</li>
                    <li className={styles.textoPropriedade}>{disco}</li>
                    <li className={styles.textoPropriedade}>{quantidade}</li>
                </ul>
                <img className={styles.imagem} src={imagem} alt={imagemTexto}/>               
            </figure>
    )

};

export default CardEquipamento;


//Ao clicar criar uma renderização condicional mostrando os locais onde tem tal equipamento com tal patrimonio 
