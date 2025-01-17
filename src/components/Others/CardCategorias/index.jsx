import styles from "./CardCategorias.module.css"

function CardCategorias ({imagem, descricao}) {

    return (    
        <figure className={styles.cardCategorias}>
            <img className={styles.imagem} src={imagem}/>
            <h1 className={styles.descricao}>{descricao}</h1>
        </figure>
    )

};

export default CardCategorias;