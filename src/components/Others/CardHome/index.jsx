import styles from "./CardHome.module.css"
import { Link } from "react-router-dom";

function CardHome ({imagem, descricao}) {

    return (    
        <figure className={styles.cardHome}>
            <img className={styles.imagem} src={imagem}/>
            <Link className={styles.descricao}>{descricao}</Link>
        </figure>
    )

};

export default CardHome;