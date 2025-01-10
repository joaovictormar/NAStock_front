import styles from "./CardCategorias.module.css"
import { Link } from "react-router-dom";

function CardCategorias ({imagem, descricao}) {

    return (    
        <figure className={styles.cardCategorias}>
            <img className={styles.imagem} src={imagem}/>
            <Link className={styles.descricao}>{descricao}</Link>
        </figure>
    )

};

export default CardCategorias;